import React from 'react';

import NewsLetter from '../elements/NewsLetter';
import PageTitle from '../elements/PageTitle';
import ScheduleTable from '../elements/ScheduleTable';

const Schedule = () => {
 
    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage="Schedule" parentTitle="Pages" />    
                <div className="animate__animated animate__fadeInRightBig">
                    <div className="container">
                        <div className="schedule-table table-responsive">
                            <ScheduleTable />
                        </div>
                    </div>
                </div>
               
            </div>   
        </>
    );
};

export default Schedule;