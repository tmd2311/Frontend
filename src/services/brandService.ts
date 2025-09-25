const API_BASE_URL = 'http://localhost:8080';

export const brandService = {
  async getBrands() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/services/product-service/api/brands`,
        {
          method: 'GET',
          credentials: 'include',
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return this.transformBrands(data);

    } catch (error) {
      console.error('Error fetching brands:', error);
      throw error;
    }
  },

  transformBrands(apiData: any) {
    let brands = [];

    if (Array.isArray(apiData)) {
      brands = apiData;
    } else if (apiData.data && Array.isArray(apiData.data)) {
      brands = apiData.data;
    } else if (apiData.brands && Array.isArray(apiData.brands)) {
      brands = apiData.brands;
    } else if (apiData.content && Array.isArray(apiData.content)) {
      brands = apiData.content;
    }

    return brands.map((item: any) => ({
      id: item.id ?? item._id ?? Math.random().toString(),
      name: item.name ?? item.brandName ?? 'Unknown Brand',
      logoUrl: item.logoUrl ?? item.logo ?? item.image ?? '/images/default-brand.png',
      slug: item.slug ?? item.name?.toLowerCase().replace(/\s+/g, '-') ?? '',
      description: item.description ?? '',
      createdAt: item.createdAt ?? item.created_at,
      updatedAt: item.updatedAt ?? item.updated_at,
    }));
  },
};
