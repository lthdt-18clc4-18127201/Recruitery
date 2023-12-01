const ul = document.querySelector(".body__tabs-wrapper ul"),
input = ul.querySelector("input"),
countNumb = document.querySelector(".details span");

let maxTags = 10;
let tags = [];

countTag();

function countTag() {
    input.focus();
    countNumb.innerText = maxTags - tags.length;
}

function createTag() {
    ul.querySelectorAll("li").forEach(li => li.remove());
    tags.slice().reverse().forEach(tag => {
        let liTag = `<li>${tag}<i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin", liTag);
    })
    countTag();
}

function remove(element, tag) {
    let index = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    countTag();
}

function addTag(e) {
    if(e.key == "Enter") {
        let tag = e.target.value.replace(/\s+/g, ' ');
        if(tag.length > 1 && !tags.includes(tag)) {
            if(tags.length < 10) {
                tag.split(',').forEach(tag => {
                    tags.push(tag);
                    createTag();
                });
            }
        }

        e.target.value = "";
    }
}

input.addEventListener("keyup", addTag);

const removeBtn = document.querySelector("button");
removeBtn.addEventListener("click", () => {
    tags.length = 0;
    ul.querySelectorAll("li").forEach(li => li.remove());
    countTag();
})

// pagination 
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