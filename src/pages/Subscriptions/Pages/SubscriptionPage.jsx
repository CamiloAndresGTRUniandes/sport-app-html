import React, { useState, useParams } from 'react';
import { IMAGES } from '../../../constants/theme';
import PageTitle from '../../../elements/PageTitle';
import SubscriptionTable from '../Components/SubscriptionTable';



const SubscriptionPage = () => {

    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage={'Suscribirse'} parentTitle="Pages" />
                <section className="content-inner rounded-shape-top overflow-hidden" style={{backgroundImage: "url("+ IMAGES.BgImage1 +")"}}>
                    <div className="container">
                        <div className="row">
                                <SubscriptionTable></SubscriptionTable>
                        </div>
                    </div>
                </section>
                
            </div>
        </>
    );
};

export default SubscriptionPage;