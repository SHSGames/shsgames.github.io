/* eslint no-extra-parens: off */
/* eslint no-invalid-this: off */
import React, { useEffect, useState } from "react";
import { InputField } from "photoncss/lib/react";
import SearchResults from "./SearchResults";
import qs from "qs";

export default function SearchBar(): JSX.Element {
	const [ term, setTerm ] = useState((qs.parse(location.search.split("?")[1]).search || "") as string);

	useEffect(function() {

		if (term === "") {
			$(".search-results").hide();
		} else {
			$(".search-results").show();
		}

		$(".search")
			.children(".photon-input")
			.children("input")
			.on("focus", function() {
				if ($(this).val() === "") return;
				$(".search-results").show();
			});

	}, [ term ]);

	useEffect(function() {
		$(document).on("click", function(event) {
			const { target } = event;
			if ($(target).hasClass("search-results")) return;
			if ($(target).parents()
				.hasClass("search-results")) return;
			if ($(target).hasClass("search")) return;
			if ($(target).parents()
				.hasClass("search")) return;
			$(".search-results").hide();
		})
			.trigger("click");
	}, []);

	useEffect(function() {
		$(document).on("keypress", function (event) {
			if (event.shiftKey) return;
			const search = $(".search")
				.children(".photon-input")
				.children("input");
			if (search.is(":focus")) return;
			event.preventDefault();

			if (event.key !== "k") return;
			const toggler = $(".photon-toolbaractions")
				.children(".only-small")
				.children(".material-icons");
			if (toggler.text() === "search") toggler.trigger("click");
			search
				.trigger("focus")
				.parent()
				.trigger("click");
		});
	}, []);

	return (
		<div className="search">
			<InputField prefix="search" type="text" variant="filled" placeholder="Press 'K' to search" value={term} onChange={ (event: InputEvent): void => {
				window.history.pushState(null, "", `${location.pathname}?search=${$(".search")
					.children(".photon-input")
					.children("input")
					.val()}`);
				setTerm((event.target as HTMLInputElement).value);
			}}/>
			<SearchResults term={term}/>
		</div>
	);
}
