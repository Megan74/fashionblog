/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Header from '../components/_child/Header';
import ArticleCard from '../components/ArticleCard';
import Audio from '../components/_child/Audio';
import { allArticles } from 'contentlayer/generated';
import { select } from '../utils/select';

import Sidebar from '../components/_child/Sidebar';

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Megan's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
     <main w-full="true" container="true" bg="/images/bg-pic.jpg">
     {articles.map(
            ({
              title,
              description,
              slug,
              image,
              category,
              publishedAt,
              readingTime,
            }) => (
              <ArticleCard
                key={slug}
                title={title}
                description={description}
                slug={slug}
                image={image}
                category={category}
                dateTime={publishedAt}
                date={publishedAt}
                readingTime={readingTime.text}
              />
            )
          )}

      </main>
      <Sidebar></Sidebar>
      <Audio></Audio>
    </div>
  )
}

export function getStaticProps() {
  const articles = allArticles
    .map((article) =>
      select(article, [
        'slug',
        'title',
        'description',
        'publishedAt',
        'readingTime',
        'author',
        'category',
        'image',
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { articles } };
}