sap.ui.define([],
	function () {
		return {
			fnOnDateFormat: function (date) {
				var formattedDate = date.substring(0, 2) + "-" + date.substring(2, 4) + "-" + date.substring(4);
				return formattedDate;
			},

			fnStatusFormat: function (status) {
				if (status === "P") {
					var result = "Paid";
					return result;
				} else {
					var result = "Due";
					return result;
				}

			}

		};

	});