const apiKey = 'wwx2j0NtI9OOfc-Kwxulitckf-O_4DraN4YYFgy3-xsmdR071vwXKIshKBqX-LGmL6k0qM_taUEQb3fWl785EnCM5R_QM-jG02amdh5TcYeQXJ-7sXyNh7oYBGHsY3Yx';

const Yelp = {
    searchYelp(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response =>{
            return response.json();           
        }).then((jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(((business) => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city, 
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating, 
                        reviewCount: business.review_count
            };
        }));
        }
     })
}};

export default Yelp;