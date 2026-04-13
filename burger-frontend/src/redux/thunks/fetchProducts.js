import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProducts = createAsyncThunk('products/fetch', async ({ filters, name, type }) => {
    let url = "http://localhost:3000"
    console.log("Filter", filters);

    const queryParams = []
    if (filters && filters.length > 0) {
        const category = filters.filter(f=>f!=="VEG" && f!=='NONVEG')
        if(category.length > 0)
            queryParams.push(`category=${filters.join(',')}`)
    }
    if(type)
        queryParams.push(`type=${type}`);
    if (name && name.trim() !== '') {
        console.log(name);
        queryParams.push(`name=${name}`)
    }
    if (queryParams.length > 0)
        url += `?${queryParams.join('&')}`;
    console.log(url);

    const response = await axios.get(url);
    return response.data;
})


export { fetchProducts };