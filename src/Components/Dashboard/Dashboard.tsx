import React, { Suspense, useEffect, useState } from "react";
import classes from "./Dashboard.module.scss";
import axios from "axios";
import {LazyLoadImage} from 'react-lazy-load-image-component'

const CardComponent = React.lazy(()=> import('../Card/Card'))

function Dashboard() {
    const [state,setState] = useState<any>([])
    const api = async()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        setState(response.data)
        console.log(response.data)
        
    }
    useEffect(()=>{
           api()
    },[])

  return (
    <div className={classes.parent}>
        <Suspense fallback={<h1>Image is coming...</h1>}>
                {
                    state.map(( x:any)=>(
                        // <CardComponent img={x.url}  />
                        <LazyLoadImage src={x.url} height={200} width={200}/>
                    )

                    )
                }
        </Suspense>
        {/* {
            state.map((x:any)=>(
                <Suspense fallback={<h1>image is coming...</h1>}>
           
                 <CardComponent img={x.url} />
                  
                </Suspense>
            ))
        } */}
    </div>
  );
}

export default Dashboard;
