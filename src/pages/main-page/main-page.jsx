import { MainAbout } from './components/main-about';
import { MainBenefits } from './components/main-benefits';
import { MainForm } from './components/main-form';
import { MainPackages } from './components/main-packages';
import { MainPromo } from './components/main-promo';
import { MainTeachers } from './components/main-teachers';

export const MainPage = () => {
  return (
    <>
      <MainPromo />
      <MainAbout />
      <MainBenefits />
      <MainTeachers />
      <MainPackages />
      <MainForm />
    </>
  );
};
