import { QueryClient } from '@tanstack/react-query';

export class QueryClientSingleton {
  private static instance: QueryClientSingleton;
  private client: QueryClient;

  private constructor() {
    this.client = new QueryClient();
  }

  public static getInstance(): QueryClientSingleton {
    if (!QueryClientSingleton.instance) {
      QueryClientSingleton.instance = new QueryClientSingleton();
    }
    return QueryClientSingleton.instance;
  }

  public getClient() {
    return this.client;
  }
}

export const getQueryClient = () => {
  return QueryClientSingleton.getInstance().getClient();
};

export const invalidateQuery = (queryKey: string[]) => {
  return getQueryClient().invalidateQueries({
    queryKey,
  });
}
