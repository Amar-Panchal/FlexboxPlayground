export default function SeoSchema() {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Flexbox & Grid Playground',
          description:
            'Interactive Flexbox and CSS Grid learning tool for frontend developers.',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'All',
        }),
      }}
    />
  );
}
