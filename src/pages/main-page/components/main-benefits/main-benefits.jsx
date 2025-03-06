import { Container } from '@/components/container';
import { BenefitItem } from '@/pages/main-page/components/main-benefits/benefit-item/benefit-item.jsx';

import styles from './main-benefits.module.scss';

// eslint-disable-next-line no-unused-vars
const benefitItems = [
  {
    id: 1,
    subtitle: 'Удостоверение',
    description:
      'Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях',
  },
  {
    id: 2,
    subtitle: 'Знания',
    description:
      'По основам разработки учебно-методических комплексов по робототехнике и программированию',
  },
  {
    id: 3,
    subtitle: 'Практику ',
    description:
      'Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)',
    tooltip: 'При наличии свободных мест',
  },
];

export const MainBenefits = () => {
  return (
    <section className={styles.benefits}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Что вы получите после курса</h2>
          <div className={styles.items}>
            {benefitItems.map((item) => (
              <BenefitItem
                key={item.id}
                title={item.subtitle}
                description={item.description}
                tooltipText={item.tooltip}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
