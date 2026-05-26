import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>404 - {t('common.notFound', 'Page Not Found')}</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="min-h-[70vh] flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-max mx-auto text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">404 error</p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            {t('common.pageNotFound', 'Page not found.')}
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            {t('common.pageNotFoundDesc', "Sorry, we couldn't find the page you're looking for.")}
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              <Home className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
              {t('common.goHome', 'Go back home')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
