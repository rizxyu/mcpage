import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://play.hexagonal.web.id:4567/v1",
  headers: {
    Accept: "application/json",
    key: "Hexagonal@#$"
  }
});

api.interceptors.response.use((val) => {
  return val?.data || val;
}, (err) => {
  if (err instanceof AxiosError) {
    if (typeof err.response?.data === "string") {
      throw new Error(`[${err.response.status}] ${err.response.data}`);
    }
    throw err;
  }
  throw err;
});

export const prefixes = [
  /((&|§)r)?(&|§)bMEMBER(&|§)r /,
  /((&|§)r)?(&|§)cADMIN(&|§)r /,
  /(&|§)([a-z0-9])/g
];

/**
 * @param {string} x
 * @returns {string}
 */
export const removePrefixes = x => {
  let result = x ?? "";
  for (const prefix of prefixes) {
    result = result.replace(prefix, "");
  }
  return result;
};

/**
 * @returns {Promise<import("../types/ServerTap.js").Advencement[]>}
 */
export async function advancements() {
  return await api.get("/advancements");
}

export const message = {
  async broadcast(message) {
    const res = await api.post("/chat/broadcast", new URLSearchParams({ message }));
    return res === "success";
  },
  async tell(uuid, message) {
    const res = await api.post("/chat/tell", new URLSearchParams({
      playerUuid: uuid,
      message
    }));
    return res === "success";
  }
};

export const economy = {
  async info() {
    return await api.get("/economy");
  },
  async debit(uuid, amount) {
    const res = await api.post("/economy/debit", new URLSearchParams({ uuid, amount }));
    return res === "success";
  },
  async pay(uuid, amount) {
    const res = await api.post("/economy/pay", new URLSearchParams({ uuid, amount }));
    return res === "success";
  }
};

/**
 * @param {string} message
 * @param {string|undefined} uuid
 * @returns {Promise<string>}
 */
export async function parsePlaceholder(message, uuid) {
  const params = new URLSearchParams({ message });
  if (uuid) params.append("uuid", uuid);
  return await api.get("/placeholders/replace", { params });
}

export const player = {
  async lists() {
    const data = await api.get("/players");
    for (const p of data) {
      p.displayName = removePrefixes(p.displayName);
    }
    return data;
  },
  async inventory(playerUuid, worldUuid) {
    return await api.get(`/players/${playerUuid}/${worldUuid}/inventory`);
  },
  async get(uuid) {
    const data = await api.get(`/players/${uuid}`);
    data.displayName = removePrefixes(data.displayName);
    return data;
  },
  async all() {
    return await api.get("/players/all");
  }
};

export const ops = {
  async add(uuid) {
    await api.post("/server/ops", new URLSearchParams({ playerUuid: uuid }));
  },
  async remove(uuid) {
    await api.delete("/server/ops", {
      data: new URLSearchParams({ playerUuid: uuid })
    });
  },
  async lists() {
    return await api.get("/server/ops");
  }
};

export async function plugins() {
  return await api.get("/plugins");
}

export const server = {
  async info() {
    return await api.get("/server");
  },
  async runCommand(command) {
    const res = await api.post("/server/exec", new URLSearchParams({
      command,
      time: null
    }));
    return res || true;
  }
};

export default {
  _api: api,
  prefixes,
  removePrefixes,
  advancements,
  message,
  economy,
  parsePlaceholder,
  player,
  ops,
  plugins,
  server
};
