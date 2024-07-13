export const findLocation= async()=>{
    return new Promise((resolve,reject)=>{
        if (navigator.geolocation) {
            const location = navigator.geolocation;
            if (location){
                location.getCurrentPosition(function (position) {
                    const latitude = position.coords.latitude;
                    const longitude= position.coords.longitude;
                    resolve({ lat: latitude, lng: longitude });
                },
                (error)=>{
                    reject(error);
                }
            )   
            }else{
                reject(new Error('Geolocation is not supported by this browser.'));
            }
        }
    })
}