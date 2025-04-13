const BASE_URL = "http://play.hexagonal.web.id:4567/v1";
const HEADERS = {
  Accept: "application/json",
  key: "Hexagonal@#$"
};

const fetchApi = async (url, options = {}) => {
  const response = await fetch(`${BASE_URL}${url}`, { ...options, headers: HEADERS });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`[${response.status}] ${errorData?.message || errorData || "Unknown Error"}`);
  }
  return response.json();
};

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
  return await fetchApi("/advancements");
}

export const message = {
  async broadcast(message) {
    const res = await fetchApi("/chat/broadcast", {
      method: "POST",
      body: new URLSearchParams({ message })
    });
    return res === "success";
  },
  async tell(uuid, message) {
    const res = await fetchApi("/chat/tell", {
      method: "POST",
      body: new URLSearchParams({
        playerUuid: uuid,
        message
      })
    });
    return res === "success";
  }
};

export const economy = {
  async info() {
    return await fetchApi("/economy");
  },
  async debit(uuid, amount) {
    const res = await fetchApi("/economy/debit", {
      method: "POST",
      body: new URLSearchParams({ uuid, amount })
    });
    return res === "success";
  },
  async pay(uuid, amount) {
    const res = await fetchApi("/economy/pay", {
      method: "POST",
      body: new URLSearchParams({ uuid, amount })
    });
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
  return await fetchApi("/placeholders/replace", {
    method: "GET",
    body: params
  });
}

export const player = {
  async lists() {
    const data = await fetchApi("/players");
    for (const p of data) {
      p.displayName = removePrefixes(p.displayName);
    }
    return data;
  },
  async inventory(playerUuid, worldUuid) {
    return await fetchApi(`/players/${playerUuid}/${worldUuid}/inventory`);
  },
  async get(uuid) {
    const data = await fetchApi(`/players/${uuid}`);
    data.displayName = removePrefixes(data.displayName);
    return data;
  },
  async all() {
    return await fetchApi("/players/all");
  }
};

export const ops = {
  async add(uuid) {
    await fetchApi("/server/ops", {
      method: "POST",
      body: new URLSearchParams({ playerUuid: uuid })
    });
  },
  async remove(uuid) {
    await fetchApi("/server/ops", {
      method: "DELETE",
      body: new URLSearchParams({ playerUuid: uuid })
    });
  },
  async lists() {
    return await fetchApi("/server/ops");
  }
};

export async function plugins() {
  return await fetchApi("/plugins");
}

export const server = {
  async info() {
    return await fetchApi("/server");
  },
  async runCommand(command) {
    const res = await fetchApi("/server/exec", {
      method: "POST",
      body: new URLSearchParams({
        command,
        time: null
      })
    });
    return res || true;
  }
};

export default {
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
