import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://api.unsplash.com',
        headers: {
            Authorization:
                'Client-ID f04996fd3942de7adb735704752a895df15db8f0b53da8970622f02354d5cd37'
        }
    }
);