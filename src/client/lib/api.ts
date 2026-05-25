/**
 * My Money Friend - LocalStorage Mock API
 * Since the backend was removed, all data is now stored in the browser's localStorage.
 */

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function getFromStorage(key: string) {
  const data = localStorage.getItem(`mymoneyfriend_${key}`);
  return data ? JSON.parse(data) : [];
}

function saveToStorage(key: string, data: any) {
  localStorage.setItem(`mymoneyfriend_${key}`, JSON.stringify(data));
}

function createMockService(key: string) {
  return {
    getAll: async () => {
      await delay(100);
      return getFromStorage(key);
    },
    create: async (payload: any) => {
      await delay(100);
      const items = getFromStorage(key);
      const newItem = { ...payload, id: payload.id || crypto.randomUUID() };
      items.push(newItem);
      saveToStorage(key, items);
      return newItem;
    },
    update: async (id: string, payload: any) => {
      await delay(100);
      const items = getFromStorage(key);
      const index = items.findIndex((item: any) => item.id === id);
      if (index !== -1) {
        items[index] = { ...items[index], ...payload, id };
        saveToStorage(key, items);
        return items[index];
      }
      throw new Error(`${key} not found`);
    },
    delete: async (id: string, type?: string) => {
      await delay(100);
      const items = getFromStorage(key);
      const filtered = items.filter((item: any) => item.id !== id);
      saveToStorage(key, filtered);
      return { success: true };
    },
  };
}

export const usersService = createMockService("users");
export const accountsService = createMockService("accounts");
export const transactionsService = createMockService("transactions");
export const goalsService = createMockService("goals");
export const categoriesService = createMockService("categories");
export const investmentsService = createMockService("investments");
export const budgetRulesService = createMockService("budgetRules");

