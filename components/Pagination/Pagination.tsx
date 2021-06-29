import { useRouter } from 'next/router';
import React from 'react';
import { Pagination as PaginationSU, PaginationProps } from 'semantic-ui-react';
import queryString from 'query-string';

interface PaginationMyProps {
  totalGames: number;
  page: number;
  limitPerPage: number;
}

const Pagination = ({ totalGames, page, limitPerPage }: PaginationMyProps) => {
  const totalPages = Math.ceil(totalGames / limitPerPage);
  const router = useRouter();
  const urlParse = queryString.parseUrl(router.asPath);

  console.log(urlParse);

  const goToPage = (newPage: any) => {
    urlParse.query.page = newPage.toString();
    const url = queryString.stringifyUrl(urlParse);
    router.push(url);
  };

  return (
    <div className="pagination">
      <PaginationSU
        defaultActivePage={page}
        totalPages={totalPages}
        firstItem={null}
        lastItem={null}
        onPageChange={(_, data: PaginationProps) => goToPage(data.activePage)}
        boundaryRange={0}
        siblingRange={1}
        ellipsisItem={null}
      ></PaginationSU>
    </div>
  );
};

export default Pagination;
