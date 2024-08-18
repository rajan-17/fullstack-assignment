import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Main = () => {
    const [helpdata, setHelpata] = useState([])

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/api/help/getall')
            setHelpata(resp.data);
            console.log(resp.data)
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    }
    return (
        <div className='container'>
            <div className="row">
                {
                    helpdata.map((val) => {
                        return (
                            <div className="col-md-6 col-sm-12 px-5">
                                <div class="card my-4 ">
                                    <div class="card-header">
                                       <h5> {val.title}</h5>
                                    </div>
                                    <div class="card-body">
                                        <blockquote class="blockquote mb-0">
                                            <p>{val.description}</p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                        )
                    })


                }


            </div>

        </div>
    )
}

export default Main
