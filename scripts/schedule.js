/<reference path="MindFusion.Scheduling-vsdoc.js" />
let l = MindFusion.Scheduling;

let calendar = new l.Calendar(document.getElementById("schedule"));

calendar.selectionEnd.addEventListener(handleSelection);
calendar.headerClick.addEventListener(handleHeaderClick);


calender.render();

function handleHeaderClick(sender, args)
{
	if(sender.currentView === p.CalendarView.Timetable)
	{
		sender.date = sender.timetableSettings.dates.items()[0];
		sender.currentView = p.CalendarView.SingleMonth;
	}
}

function handleSelection(sender, args)
{
	if(sender.currentView === p.CalendarView.SingleMonth)
	{
		//cancel the default behavior
		args.cancel = true;

		let start = args.startTime;
		let end = args.endTime;

		//clear all dates from the timetable
		sender.timetableSettings.dates.clear();

		while(start < end)
		{
			sender.timetableSettings.dates.add(start);
			start = p.DateTime.addDays(start, 1);

		}

		sender.currentView = p.CalendarView.Timetable;
	}
}
