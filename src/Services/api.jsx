


export const fetchImages = (imageName, page = 1) => {
    const URL = `https://pixabay.com/api/?key=25256496-da285e9dc7351a7d44328e376&q=${imageName}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;
    return fetch(URL)
        .then(response => 
            {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject(
              new Error(`Can't find ${imageName} images`),
            );
        } ) 
};


   
