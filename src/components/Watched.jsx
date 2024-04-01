import React from 'react'
import MovieNavbar from './MovieNavbar'

const Watched = () => {
    return (
        <div>
<MovieNavbar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card" >
                                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kung-fu-panda-4-et00379741-1706177646.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Kung Fu Panda 4</h5>

                                        <a href="#" class="btn btn-danger">Watch Again</a>
                                    </div>
                                </div>









                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card" >
                                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dune-part-two-et00331567-1706167890.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Dune: Part Two</h5>

                                        <a href="#" class="btn btn-danger">Watch Again</a>
                                    </div>
                                </div>



                            </div>
                        </div>











                    </div>
                </div>
            </div>

















        </div>
    )
}

export default Watched