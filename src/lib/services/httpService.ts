const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;;

interface Params {
  [key: string]: string;
}

const httpService = {
  get: async <T>(endpoint: string, params?: Params): Promise<T> => {
    const url = new URL(endpoint, BASE_URL);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json() as Promise<T>;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

};

export default httpService;