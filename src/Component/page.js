import React, { useMemo, useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import { COLUMNS } from './columns';
import { Data } from './MOCK_DATA';

const Page = (props) => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Data, [])
    const tableInstance = useTable({
        columns,
        data
    },
        usePagination
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        setPageSize,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        prepareRow,
    } = tableInstance

    const { pageIndex } = state;

    useEffect(() => {
        setPageSize(Number(6));
    }, []);



    return (
        <div className="container">
            <table {...getTableProps()} id="customers">
                <thead>
                    {headerGroups.map((headerGroups) => (
                        <tr {...headerGroups.getHeaderGroupProps()}>
                            {headerGroups.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}

                        </tr>
                    ))}

                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            <div className="App">
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}> &#60;&#60; </button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}> 1 </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}> 2 </button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}> &#62;&#62; </button>

            </div>
        </div>

    );
}

export default Page;
