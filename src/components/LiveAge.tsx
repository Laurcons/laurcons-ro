'use client';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export default function LiveAge() {
  const getAge = () => {
    const isPassed = dayjs().diff(dayjs().set('date', 26).set('month', 6)) > 0;
    return dayjs().get('year') - 2003 + (isPassed ? 0 : -1);
  };
  const [age, setAge] = useState(getAge);

  useEffect(() => {
    const intv = setInterval(() => setAge(getAge), 1000);
    return () => clearInterval(intv);
  }, []);

  return <>{age}</>;
}
