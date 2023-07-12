import * as sPagination from '@/components/Pagination/Pagination.styles';
import { getPaginationPath } from '@/utils/constants';

const Pagination = ({
    pages,
    category,
    currentPage,
}: {
    pages: number;
    category: string;
    currentPage: number;
}) => {
    const getButtons = () => {
        return Array(pages)
            .fill(0)
            .map((_, index) => {
                const pageNumber = index + 1;
                const isCurrentPage = currentPage === pageNumber;

                return (
                    <sPagination.PageButton
                        key={index}
                        href={getPaginationPath(category, pageNumber)}
                        $page={isCurrentPage}
                    >
                        {pageNumber}
                    </sPagination.PageButton>
                );
            });
    };
    return pages === 1 ? null : <sPagination.Wrapper>{getButtons()}</sPagination.Wrapper>;
};

export default Pagination;
