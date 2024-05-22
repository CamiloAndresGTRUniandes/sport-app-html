import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSubscriptionTable } from "../Hooks/useSubscriptionTable";
import Table from "react-bootstrap/Table";
import { SpinnerSportApp } from "../../Utils/SpinnerSportApp";
import { Button } from "bootstrap";

const SubscriptionTable = () => {
    const planId = useParams();
    const {
        plan,
        GetDataAsync,
        productsLoading,
        formatCurrency,
        pagar
    } = useSubscriptionTable();
    useEffect(() => {
        GetDataAsync(planId);
    }, []);
    
    return (
        <>
            <div className="row">
                <div className="schedule-table table-responsive">
                    {!productsLoading && (
                        <Table data-testid="subscription-table" className="table-responsive-md ck-table mb-5">
                            <thead>
                                <tr>
                                    <th>Nombre del plan</th>
                                    <th>Costo</th>
                                    <th>Duracion</th>
                                    <th>Pagar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row_1">
                                    <td className='highlighted-cell event'>{plan.name}</td>
                                    <td className="event"> {formatCurrency(plan.price)}</td>
                                    <td className="event"> {`30 dias`}</td>
                                    <td className="event">
                                        <button className="btn btn-primary shadow-primary btn-skew  mt-2" onClick={() => pagar(plan)}><span>
                                            Pagar
                                        </span></button>
                                        
                                    </td>
                                </tr>
                            </tbody>
                        </Table>)
                    }
                </div>
            </div>
            {productsLoading && <SpinnerSportApp />}
        </>
    )
};
export default SubscriptionTable;