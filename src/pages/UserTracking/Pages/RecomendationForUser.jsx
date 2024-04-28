import React, { useEffect } from "react";
import { IMAGES } from "../../../constants/theme";
import PageTitle from "../../../elements/PageTitle";
import { Link, useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { ParagraphLarge, SpinnerSportApp } from "../../Utils";
import { useRecomendationForUser } from "../Hooks/useRecomendationForUser";

export const RecommendationForUser = () => {
  const params = useParams();
  const id = params["id"];

  const {
    recommendationUsers,
    loadingRecommendationUser,
    getRecommendationUser
  } = useRecomendationForUser();

  useEffect(() => {
    getRecommendationUser(id);
  }, [id]); // Added dependency array to prevent infinite loops

  return (
    <>
     
      <div className="page-content bg-white">
        <PageTitle
          activePage={`Recomendación para ${recommendationUsers.user?.name} ${recommendationUsers.user?.lastName} `}
          parentTitle="Servicios"
        />
        <div
          className="container animate__animated animate__fadeInRightBig"
          style={{ backgroundImage: `url(${IMAGES.BgImage1})` }}
        >
          <div className="">
            <div className="row">
              <div className="col-md-12">
                <div className="schedule-table table-responsive">
                  <div className="row col-12 ">
                    <div className="col-lg-9 col-sm-1"></div>
                    <div className="col-lg-3 col-sm-11 mb-3">
                      <div className="input-line input-group">
                        <Link
                          className="btn btn-dark shadow-dark btn-skew"
                          to={`/edit-recommendation/${id}`}>
                          Crear Recomendación
                        </Link>
                      </div>
                    </div>
                  </div>
                  {loadingRecommendationUser && <SpinnerSportApp />}
                  {!loadingRecommendationUser  &&(
                    <>
                  <div className="schedule-table table-responsive">
                    <table className="table table-bordered table-striped" name="tblUser" id="tblUser">
                      <thead>
                        <tr>
                          <th>Usuario</th>
                          <th>Nombre</th>
                          <th>Plan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {recommendationUsers.user?.name} {recommendationUsers.user?.lastName}
                          </td>
                          <td>{recommendationUsers.serviceName}</td>
                          <td>{recommendationUsers.plan?.name}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="schedule-table table-responsive">
                    <table className="table table-bordered table-striped mt-4" name="tblRecommendation" id="tblRecommendation">
                      <thead>
                        <tr>
                          <th>Recomendacion</th>
                          <th>Fecha de recomendación</th>
                          <th>Detalle</th>
                        </tr>
                      </thead>
                      <tbody>
                      
                        {recommendationUsers.userRecommendations?.map(
                          (recommendation) => (
                            <tr key={recommendation.id}>
                              <td style={{textAlign: 'left'}}>{recommendation?.title}</td>
                              <td>   {format(recommendation?.createdAt, "dd-MM-yyyy")}</td>
                              <td style={{textAlign: 'justify'}}>
                              <ParagraphLarge text={recommendation?.description} maxLengthText={150}/>
                              </td>
                            </tr>

                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                  </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};
