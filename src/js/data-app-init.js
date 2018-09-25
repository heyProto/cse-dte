ProtoGraph.initDataApp = function () {
    var x = new ProtoGraph.Card.toMaps(),
        streams = ProtoGraph.streams,
        page = ProtoGraph.page;

    x.init({
        selector: document.querySelector('#card-list-div'),
        dataURL: streams.Grid.url,//'https://dte.pro.to/71c94a440fefda7b48778f70/index.json',
        topoURL: 'https://p.factchecker.in/data/india-topo.json',//'./india-topo.json',
        chartOptions: {
            height: 700,
            defaultCircleColor: ProtoGraph.site['house_colour']
        },
        filterConfigurationJSON: {
            colors: {
                house_color: ProtoGraph.site['house_colour'],
                text_color: '#343434',
                active_text_color: ProtoGraph.site['house_colour'],
                filter_summary_text_color: ProtoGraph.site['reverse_font_colour']
            },
            selected_heading: 'FILTERS',
            reset_filter_text: 'Reset'
        },
        filters: [
            {
                "alias": "Subject",
                "propName": "subject"
            },
            {
                "alias": "Latest Activity",
                "propName": "date"
            },
            {
                "alias": "Status",
                "propName": "case_status"
            },
            {
                "alias": "Location",
                "propName": "location"
            },            
            {
                "alias": "Court Involved",
                "propName": "court_involved"
            },
            {
                "alias": "Type Of Petitioner",
                "propName": "petition_type"
            },
            {
                "alias": "Type Of Respondent",
                "propName": "respondent_type"
            },
            {
                "alias": "Disposition",
                "propName": "petition_result"
            }
        ]
    });
    x.renderLaptop();
}