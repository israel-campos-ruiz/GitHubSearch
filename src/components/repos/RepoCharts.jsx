import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { UserContext } from "../../context/GithubUserContext";
import useGet from "../../hooks/useGet";
import { average } from "../../helpers/average";
import { nameCharst } from "../../helpers/nameChart";
import { ReposContext } from "../../context/GithubReposContext";

const RepoCharts = () => {
  const { searchUser } = useContext(UserContext);
  const { searchRepos  } = useContext(ReposContext)
  const { data } = useGet(
    `https://api.github.com/repos/${searchUser}/${searchRepos}/languages`
  );

  const averageCharts = data? average(data) : 0;
  const chartsName = data? nameCharst(data) : '';
  const result = averageCharts && averageCharts.map((i, index) => ({
    average: i,
    languaje: chartsName[index],
  }));
  return (
    <div className="col-lg-6 col-md-12 col-sm-12 mb-3 ">
      <div className="card-user">
        <h6 className="text-center my-3">GRÁFICOS</h6>
        {!!data && (
            <BarChart
            className="d-flex justify-center align-center"
            width={360}
            height={400}
            data={result}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid />
            <XAxis dataKey="languaje" />
            <YAxis />
            <Tooltip />
            <Legend className="text-danger" />
            <Bar dataKey="average" fill="#168ef4" />
          </BarChart>
        ) }
      </div>
    </div>
  );
};

export default RepoCharts;
