import { createSlice} from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: 'article',
    initialState:{
        articles:[],
        displayedArticles:[],
        searchedField:'',
        hasMore:true
    },
    reducers:{
        fetch_articles:(state,action)=>{
          
           state.articles=[...state.articles,...action.payload.articles]
            state.displayedArticles=[...state.displayedArticles,...action.payload.articles]
            state.hasMore=true
            return state
        },
        filter_articles:(state,action)=>{
            state.searchedField=action.payload.input
            state.hasMore=false
            state.displayedArticles=state.articles.filter(article=>article.headline.main.toUpperCase().startsWith(action.payload.input.toUpperCase()))
        },
        clear_Filter:(state)=>{
            state.searchedField=''
            state.hasMore=true
            state.displayedArticles=state.articles
        },
        noMoreArticles :(state)=>{
            state.hasMore=false
        }
    }
})

export const {fetch_articles,filter_articles,clear_Filter,noMoreArticles}=articleSlice.actions

export default articleSlice.reducer
