import React from "react";
import { Grid } from "antd-mobile";

const Sheet = (props) => {
    // const {col} = props
  return (
    <>
      <div>
        <div className="title">
          <Grid columns={7} gap={0}>
            <Grid.Item>
              <div style={{ textAlign: "center" }}>孀花</div>
            </Grid.Item>
            <Grid.Item>
              <div style={{ textAlign: "center" }}>绽亡花</div>
            </Grid.Item>
            <Grid.Item>
              <div style={{ textAlign: "center" }}>慰魂之光</div>
            </Grid.Item>
            <Grid.Item>
              <div style={{ textAlign: "center" }}>随根草</div>
            </Grid.Item>
            <Grid.Item>
              <div style={{ textAlign: "center" }}>晋荣花</div>
            </Grid.Item>
            <Grid.Item>
              <div style={{ textAlign: "center" }}>卖店价</div>
            </Grid.Item>
            <Grid.Item>
              <div style={{ textAlign: "center" }}>成本价</div>
            </Grid.Item>
          </Grid>
        </div>
        <div className="content">
          <Grid columns={7} gap={0}>
            <Grid.Item>
              <div style={{ textAlign: "center" }}>0</div>
            </Grid.Item>
            <Grid.Item>
              <div style={{ textAlign: "center" }}>6</div>
            </Grid.Item>
            <Grid.Item>
              <div style={{ textAlign: "center" }}>0</div>
            </Grid.Item>
            <Grid.Item>
              <div style={{ textAlign: "center" }}>1</div>
            </Grid.Item>
            <Grid.Item>
              <div style={{ textAlign: "center" }}>1</div>
            </Grid.Item>
            <Grid.Item>
              <div style={{ textAlign: "center" }}>0.25</div>
            </Grid.Item>
            <Grid.Item>
              <div style={{ textAlign: "center" }}>2300</div>
            </Grid.Item>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Sheet;
