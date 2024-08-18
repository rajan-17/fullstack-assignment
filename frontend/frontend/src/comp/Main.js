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
            console.error('Error fetching data:', error);
        }
    }

    const searchHandle = async (event) => {
        const key = event.target.value;
        try {
            if (key) {
                const resp = await axios.get(`http://localhost:5000/api/help/search/${key}`);
                setHelpata(resp.data)

            }
            else {
                fetchdata();
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }
    return (
        <>
            <div className="help-center">
                <div className="help-content">

                    <h1 className='text-center center'>How can we help? </h1>
                    <form className="d-flex my-4" role="search">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={searchHandle} />

                    </form>
                </div>

            </div>
            <div className='container'>
                <div className="row">
                    {
                        helpdata.map((val) => {
                            return (
                                <div className="col-md-6 col-sm-12 px-5">
                                    <div className="card my-4 ">
                                        <div className="card-header">
                                            <h5> {val.title}</h5>
                                        </div>
                                        <div className="card-body">
                                            <blockquote className="blockquote mb-0">
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

        </>
    )
}

export default Main
