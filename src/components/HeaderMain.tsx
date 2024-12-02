import React from 'react';
import { Button } from 'antd';

const HeaderMain = ({namePage}:{namePage:string}) => (
  <div className="header-main w-[90%] mx-auto">
    <div className="flex justify-between p-4">
      <div className="font-bold text-[25px]">{namePage}</div>
      <Button type="primary">Thêm mới</Button>
    </div>
  </div>
);

export default HeaderMain;