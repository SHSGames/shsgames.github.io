import React from "react";

class Searchbar extends React.Component {
	componentDidMount() {
		$("#search").on("keyup", function() {
			const v = $(this).val();

			$(".gamecard").parent().removeClass("hidden");
			$(".gamegroup").removeClass("hidden");

			$(".gamecard").each(function() {
				if($(this).children(".card-content").children(".card-title").text().toLowerCase().match(v.toLowerCase()) === null) {
					$(this).parent().addClass("hidden");

					let hidden = true;
					$(this).parents(".gamegroup").children(".row").children(".col").each(function() {
						if($(this).hasClass("hidden") === false) {
							hidden = false;
						}
					});

					hidden && $(this).parents(".gamegroup").addClass("hidden");
				}
			});
		});

		document.addEventListener("keydown", e => {
			if(e.ctrlKey && e.which === 70) {
				e.preventDefault();
				$("#search").focus();
			}
		})
		
	}

	render() {
		return (
			<div className="search-wrapper">
				<i className="material-icons">search</i>
				<input type="text" placeholder="Search" id="search"/>
			</div>
		);
	}
}

export default Searchbar;
