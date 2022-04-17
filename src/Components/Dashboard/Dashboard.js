import React, { Fragment, useEffect, useState } from 'react'
import { Spinner} from "react-bootstrap"
import { ArticlesUrl } from '../../Helper/AppHelper';
import ApiServices from '../../Services/ApiServices';
import  Article  from './SubComponents/Article';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Dashboard.css'
import { Header } from '../../Layout/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_articles,filter_articles,clear_Filter, noMoreArticles } from '../../features/articleSlice';

const Dashboard = () => {
 
    const { secureGet } = ApiServices();

    const [articlePage, setArticlePage] = useState(0);
    const [loading,setLoading]=useState(true);
 
    const displayedArticles=useSelector(state=>state.article.displayedArticles)
    const token=useSelector(state=>state.user.token)
    const hasMore=useSelector(state=>state.article.hasMore)


    const dispatch=useDispatch()

     useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
            getArticles();
        },1000)
       
    }, [])

    const getArticles=()=>{
        const url=ArticlesUrl+`?page=${articlePage}`
        secureGet(url,token).then(response=>{
            if(response.data.response.docs.length>0)
               dispatch(fetch_articles({articles:response.data.response.docs}))
            else
               dispatch(noMoreArticles())

        })
    }

    useEffect(()=>{
        if(articlePage>0){
        setTimeout(() => {
            getArticles();
         }, 4000);
        }

    },[articlePage])
    
    const fetchMoreData=()=>{
        setArticlePage(articlePage+1)
    }

    const handleInputChange=(event)=>{
         if(event.target.value==='')
           //clear Filter
           dispatch(clear_Filter())
         else
           dispatch(filter_articles({input:event.target.value}))
     }
 
 

     return (
        <>
        {loading ?
        <div className='DisplaySpinner-Container'>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
        :
        <>
        <Header/>

        <div className='main'>
            <form className="form-inline">
               <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleInputChange}/>
           </form>
           {displayedArticles.length>0 ? 
           <div className='dashboard'>
               <div >
               <InfiniteScroll
               dataLength={displayedArticles.length}
               next={fetchMoreData}
               hasMore={hasMore}
               loader={hasMore && <div style={{marginTop : "10px"}}>Loading...</div>}>
                {
                    displayedArticles.map((article, index)=> <Fragment key={index}><Article article={article}></Article></Fragment>)
                }
               </InfiniteScroll>
               </div>
           </div>
           :
            null
           }
       </div> 
       </>
       }
      
        </>
    )
}

export default Dashboard