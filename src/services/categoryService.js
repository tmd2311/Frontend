const API_BASE_URL = 'http://localhost:8080';

export const categoryService = {
  async getCategories() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/services/product-service/api/categories`,
        {
          method: 'GET',
          credentials: 'include'
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return this.transformCategories(data);

    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  transformCategories(apiData) {
    let categories = [];
    if (Array.isArray(apiData)) {
      categories = apiData;
    } else if (apiData.data && Array.isArray(apiData.data)) {
      categories = apiData.data;
    } else if (apiData.categories && Array.isArray(apiData.categories)) {
      categories = apiData.categories;
    } else if (apiData.content && Array.isArray(apiData.content)) {
      categories = apiData.content;
    }

    return categories.map(item => ({
      id: item.id ?? item._id ?? Math.random().toString(),
      title: item.title ?? item.name ?? item.categoryName ?? 'Unknown Category',
      img: item.img ?? item.image ?? item.imageUrl ?? item.thumbnail ?? '/images/default-category.jpg',
      description: item.description ?? '',
      createdAt: item.createdAt ?? item.created_at,
      updatedAt: item.updatedAt ?? item.updated_at
    }));
  }
};
