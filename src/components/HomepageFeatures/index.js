import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn',
    Svg: require('@site/static/img/undraw_education.svg').default,
    description: (
      <>
        First, we will learn the fundamentals of computer programming.
      </>
    ),
  },
  {
    title: 'Implement',
    Svg: require('@site/static/img/undraw_building_blocks.svg').default,
    description: (
      <>
        Then, we will implement our new knowledge in the makecode editor.
      </>
    ),
  },
  {
    title: 'Expand',
    Svg: require('@site/static/img/undraw_proud_coder.svg').default,
    description: (
      <>
        Finally, we will expand on our makecode project to make a cohesive program.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
