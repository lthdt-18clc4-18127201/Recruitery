'use client'

import { useEffect, useState } from 'react'
import Filter from '@components/Filter'
import TempleteCard from '@components/TemplateCard'
import Suggesstion from '@components/Suggesstion'
import $ from 'jquery'
import instance from '../utils/instances/axiosInstance'

const Home = () => {

    const [datas, setDatas] = useState([]);
    const [filter, setFilter] = useState([]);

    const getData = async () => {
        const res = await instance.get('/api/home');
        setDatas(res.data);
    }

    useEffect(() => {
        function getPageList(totalPages, page, maxLength) {
            function range(start, end) {
                return Array.from(Array(end - start + 1), (_, i) => i + start);
            }

            const sideWidth = maxLength < 9 ? 1 : 2;
            const leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
            const rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

            if(totalPages <= maxLength) {
                return range(1, totalPages);
            }

            if(page <= maxLength - sideWidth - 1 - rightWidth) {
                return range(1, maxLength - sideWidth - 1)
                            .concat(0, range(totalPages - sideWidth + 1, totalPages));
            }


            if(page >= totalPages - sideWidth - 1 - rightWidth) {
                return range(1, sideWidth)
                            .concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
            }

            return range(1, sideWidth)
                        .concat(
                            0, range(page - leftWidth, page + rightWidth), 
                                0, range(totalPages - sideWidth + 1, totalPages));
        }

        $(function() {
            const numberOfItems = $(".card-container .card").length;
            const limitPerPage = 8;
            const totalPages = Math.ceil(numberOfItems / limitPerPage);
            const paginationSize = 5;
            let currentPage;

            function showPage(whichPage) {
                if(whichPage < 1 || whichPage > totalPages) return false;

                currentPage = whichPage;

                $(".card-container .card").hide()
                    .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

                $(".pagination li").slice(1, -1).remove();

                getPageList(totalPages, currentPage, paginationSize).forEach(item => {
                    $("<li>")
                        .addClass("page-item")
                        .addClass(item ? "current-page" : "dots")
                        .toggleClass("active", item === currentPage)
                        .append(
                            $("<a>").addClass("page-link")
                                    .attr({href: "javascript:void(0)"}).text(item || "..."))
                        .insertBefore(".next-page")
                });

                $(".previous-page").toggleClass("disable", currentPage === 1);
                $(".next-page").toggleClass("disable", currentPage === totalPages);

                return true;
            }

            $(".pagination").append(
                $("<li>").addClass("page-item")
                        .addClass("previous-page")
                        .append(
                            $("<a>").addClass("page-link")
                                    .attr({href: "javascript:void(0)"}).text("Prev")
                        ),  
                $("<li>").addClass("page-item")
                        .addClass("next-page")
                        .append(
                            $("<a>").addClass("page-link")
                                    .attr({href: "javascript:void(0)"}).text("Next")
                        )
            );

            $(".card-container").show();
            showPage(1);

            $(document).on("click", ".pagination li.current-page:not(.active)", function() {
                return showPage(+$(this).text());
            });

            $(".next-page").on("click", function() {
                return showPage(currentPage + 1);
            });

            $(".previous-page").on("click", function() {
                return showPage(currentPage - 1);
            });
        });


        getData();
    }, []);

    return (
        <div className='body'>
            <Filter filter={filter} setFilter={setFilter}/>
            <div className="data-container">
                <div className="card-container">
                    {/* {
                        datas
                        .filter((item) => {
                            return filter.toLowerCase() === ''
                                        ? item
                                        : item.title.toLowerCase().includes(filter)
                        })
                        .map((data) => {
                            console.log(data.title);
                            <TempleteCard 
                                title={data.title}
                                image={data.image}
                            />
                        })
                    } */}
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                    <TempleteCard />
                </div>
                <div className="pagination"></div>
            </div>

            <Suggesstion />
        </div>
    )
}

export default Home