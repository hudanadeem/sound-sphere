class BandSiteApi{

    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    async getComments(){
        try{
            const getComment = await axios.get(`${this.baseURL}/comments?api_key=${this.apiKey}`);
            return getComment.data;
        }catch(error){
            console.log(error);
        }
    }
    
    async postComments(commentObj){
        try{
            const postComment = await axios.post(`${
                                this.baseURL}/comments/?api_key=${this.apiKey}`,
                                commentObj, 
                                { headers: { "Content-Type": "application/json" } },
            );
            return postComment.data;
        }
        catch(error){
            console.log(error); 
        }
    }
}


export default BandSiteApi;