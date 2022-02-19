import { BaseAPI } from "./BaseAPI";

class RootAPI extends BaseAPI {
    getСountry() {
        return this.getMethod("v1/geo?B4NKGg=fVN5Q9KVOlOHDx9mOsKPAQsFBlEhBOwguLkNEDTZvKzJzT3l");
    }

    getCategories() {
        return this.getMethod("v1/applicationCategory?platform=1&B4NKGg=fVN5Q9KVOlOHDx9mOsKPAQsFBlEhBOwguLkNEDTZvKzJzT3l");
    }

    getPlotData({countryId, dateFrom, dateTo}) {
        return this.getMethod(
            `https://api.apptica.com/package/top_history/9379/${countryId}?date_from=${dateFrom}&date_to=${dateTo}&platforms=1&B4NKGg=fVN5Q9KVOlOHDx9mOsKPAQsFBlEhBOwguLkNEDTZvKzJzT3l`
        );
    }
}

export const rootAPI = new RootAPI();
