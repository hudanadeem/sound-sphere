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

    async getShows(){
        try{
            const getShows = await axios.get(`${this.baseURL}/showdates?api_key=${this.apiKey}`);
            return getShows.data;
        }catch(error){
            console.log(error);
            
        }
    }

    async deleteComment(id){
        try{
            const deleteEl = await axios.delete(`${this.baseURL}/comments/${id}?api_key=${this.apiKey}`)
            return deleteEl.data;
        }
        catch(error){
            console.log(error); 
        }
    }

    async likeComment(id){
        try{
            const likeEl = await axios.put(`${this.baseURL}/comments/${id}/like?api_key=${this.apiKey}`)
            return likeEl.data;
        }catch(error){
            console.log(error);
        }
    }
}


export default BandSiteApi;