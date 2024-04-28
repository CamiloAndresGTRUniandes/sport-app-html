import React, { useState } from 'react';
import { IMAGES } from '../../../constants/theme';
import PageTitle from '../../../elements/PageTitle';
import PricingCard from '../Components/PricingCard';



const PricingPage = () => {
    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage={'Precios'} parentTitle="Pages" />
                <section className="content-inner rounded-shape-top overflow-hidden" style={{backgroundImage: "url("+ IMAGES.BgImage1 +")"}}>
                    <div className="container">
                        <div className="row">
                                <PricingCard></PricingCard>
                        </div>
                    </div>
                </section>
                
            </div>
        </>
    );
};

export default PricingPage;