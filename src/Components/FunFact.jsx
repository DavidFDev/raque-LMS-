import { ImUsers } from "react-icons/im";
import { BiBookReader, BiUserPin } from "react-icons/bi";
import { FaDeviantart } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { PRODUCTS } from "../products";
import ParticlesComponent from "../Components/Particles";

const FunFact = () => {
    const [value, setValue] = useState(1234);

    useEffect(() => {
        const timeoutId = setTimeout(() => setValue(1), 50);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

  return (
    <div className="funfacts-section">
        <div className="container">
            <div className="funfacts-inner bg-deepred">
                <div className="row align-items-center">
                    <ParticlesComponent id="particles" />
                    <div className="col-6 col-xm-6 col-md-3 col-lg-3 mb-3 mb-lg-0">
                        <div className="single-funfact">
                            <div className="icon">
                                <ImUsers />
                            </div>

                            <div className="odometer odometer-auto-theme" data-count="50">
                                <h1>3</h1>
                            </div>

                            <div className="purpose">
                                Expert&nbsp;Instructors
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-xm-6 col-md-3 col-lg-3 mb-3 mb-lg-0">
                        <div className="single-funfact">
                            <div className="icon">
                                <BiBookReader />
                            </div>

                            <div className="odometer odometer-auto-theme" data-count="1754">
                                <h1>{PRODUCTS.length}</h1>
                            </div>

                            <div className="purpose">
                                Total Courses
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-xm-6 col-md-3 col-lg-3 mb-3 mb-lg-0">
                        <div className="single-funfact">
                            <div className="icon">
                                <BiUserPin/>
                            </div>

                            <div className="odometer odometer-auto-theme" data-count="8190">
                                <h1>2</h1>
                            </div>

                            <div className="purpose">
                                Happy Students
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-xs-6 col-md-3 col-lg-3">
                        <div className="single-funfact">
                            <div className="icon">
                                <FaDeviantart/>
                            </div>

                            <div className="odometer odometer-auto-theme" data-count="654">
                                <h1>40</h1>
                            </div>

                            <div className="purpose">
                                Creative Events
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FunFact