import React, { useEffect, useCallback } from 'react';
import './styles/root.sass';
import Input from 'components/atoms/input';
import TrailUserCard from 'components/molecules/trailUserCard';
import TrailMountainCard from 'components/molecules/trailMountainCard';

const ShowMyGear = () => {
  return (
    <div>
      <h1>曬裝備</h1>
      <TrailUserCard
        name='鹿野忠雄'
        mountain={{
          name: 'Tongku Saveq',
          mandarinName: '玉山主峰北峰'
        }}
        date='2021-02'
        burden='11'
      />
      <TrailMountainCard
        title='Tongku Saveq'
        subTitle='布農語：最後的避難所'
        category='玉山群峰' />
      <div>
        <Input
          label='hello'
          isRequired
          placeholder='placeholder' />
        <Input
          label='hello'
          placeholder='placeholder' />
        <Input
          label='label'
          disabled
          placeholder='placeholder' />
      </div>
    </div>
  );
}

export default ShowMyGear;
