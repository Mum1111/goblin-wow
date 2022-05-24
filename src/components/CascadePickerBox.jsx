import React, { useState } from "react";
import { CascadePicker, Grid } from "antd-mobile";
import casc from "./casc.module.scss";

function CascadePickerBox(props) {
  const [visible, setVisible] = useState(false);

  const { options } = props;

  return (
    <>
      <Grid className={casc.border} columns={3} gap={8}>
        <Grid.Item>
          <div className={casc.label}>商品</div>
        </Grid.Item>
        <Grid.Item span={2}>
          <div
            className={casc.choose}
            onClick={() => {
              setVisible(true);
            }}
          >
            请选择商品&gt;
          </div>
        </Grid.Item>
      </Grid>
      <CascadePicker
        options={options}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        onConfirm={(val, extend) => {
          console.log("onConfirm", val, extend.items);
        }}
      />
    </>
  );
}

export default CascadePickerBox;
