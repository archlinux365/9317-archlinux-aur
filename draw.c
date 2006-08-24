/*
 * (C)opyright MMIV-MMVI Anselm R. Garbe <garbeam at gmail dot com>
 * See LICENSE file for license details.
 */
#include "dwm.h"
#include <stdio.h>
#include <string.h>
#include <X11/Xlocale.h>

/* static */

static unsigned int
textnw(const char *text, unsigned int len)
{
	XRectangle r;

	if(dc.font.set) {
		XmbTextExtents(dc.font.set, text, len, NULL, &r);
		return r.width;
	}
	return XTextWidth(dc.font.xfont, text, len);
}

static void
drawtext(const char *text, unsigned int colidx, Bool highlight)
{
	int x, y, w, h;
	static char buf[256];
	unsigned int len, olen;
	XPoint points[5];
	XRectangle r = { dc.x, dc.y, dc.w, dc.h };

	XSetForeground(dpy, dc.gc, dc.bg[colidx]);
	XFillRectangles(dpy, dc.drawable, dc.gc, &r, 1);
	points[0].x = dc.x;
	points[0].y = dc.y;
	points[1].x = dc.w - 1;
	points[1].y = 0;
	points[2].x = 0;
	points[2].y = dc.h - 1;
	points[3].x = -(dc.w - 1);
	points[3].y = 0;
	points[4].x = 0;
	points[4].y = -(dc.h - 1);
	XSetForeground(dpy, dc.gc, dc.fg[colidx]);
	XDrawLines(dpy, dc.drawable, dc.gc, points, 5, CoordModePrevious);

	if(!text)
		return;

	w = 0;
	olen = len = strlen(text);
	if(len >= sizeof(buf))
		len = sizeof(buf) - 1;
	memcpy(buf, text, len);
	buf[len] = 0;

	h = dc.font.ascent + dc.font.descent;
	y = dc.y + (dc.h / 2) - (h / 2) + dc.font.ascent;
	x = dc.x + (h / 2);

	/* shorten text if necessary */
	while(len && (w = textnw(buf, len)) > dc.w - h)
		buf[--len] = 0;
	if(len < olen) {
		if(len > 1)
			buf[len - 1] = '.';
		if(len > 2)
			buf[len - 2] = '.';
		if(len > 3)
			buf[len - 3] = '.';
	}

	if(w > dc.w)
		return; /* too long */
	if(dc.font.set)
		XmbDrawString(dpy, dc.drawable, dc.font.set, dc.gc, x, y, buf, len);
	else {
		XSetFont(dpy, dc.gc, dc.font.xfont->fid);
		XDrawString(dpy, dc.drawable, dc.gc, x, y, buf, len);
	}
	if(highlight) {
		points[0].x = dc.x + 1;
		points[0].y = dc.y + 1;
		points[1].x = dc.w - 3;
		points[1].y = 0;
		points[2].x = 0;
		points[2].y = dc.h - 3;
		points[3].x = -(dc.w - 3);
		points[3].y = 0;
		points[4].x = 0;
		points[4].y = -(dc.h - 3);
		XDrawLines(dpy, dc.drawable, dc.gc, points, 5, CoordModePrevious);
	}
}

/* extern */

void
drawall()
{
	Client *c;

	for(c = clients; c; c = getnext(c->next))
		drawtitle(c);
	drawstatus();
}

void
drawstatus()
{
	int i, x;
	Bool istile = arrange == dotile;

	dc.x = dc.y = 0;
	dc.w = bw;
	drawtext(NULL, !istile, False);

	dc.w = 0;
	for(i = 0; i < ntags; i++) {
		dc.x += dc.w;
		dc.w = textw(tags[i]);
		if(istile)
			drawtext(tags[i], seltag[i], sel && sel->tags[i]);
		else
			drawtext(tags[i], !seltag[i], sel && sel->tags[i]);
	}
	x = dc.x + dc.w;
	dc.w = textw(stext);
	dc.x = bx + bw - dc.w;
	if(dc.x < x) {
		dc.x = x;
		dc.w = bw - x;
	}
	drawtext(stext, !istile, False);

	if(sel && ((dc.w = dc.x - x) > bh)) {
		dc.x = x;
		drawtext(sel->name, istile, False);
	}
	XCopyArea(dpy, dc.drawable, barwin, dc.gc, 0, 0, bw, bh, 0, 0);
	XSync(dpy, False);
}

void
drawtitle(Client *c)
{
	int i;
	Bool istile = arrange == dotile;

	if(c == sel && issel) {
		drawstatus();
		XUnmapWindow(dpy, c->twin);
		XSetWindowBorder(dpy, c->win, dc.fg[1]);
		return;
	}

	XSetWindowBorder(dpy, c->win, dc.bg[0]);
	XMapWindow(dpy, c->twin);
	dc.x = dc.y = 0;
	dc.w = c->tw;
	drawtext(c->name, !istile, False);
	XCopyArea(dpy, dc.drawable, c->twin, dc.gc, 0, 0, c->tw, c->th, 0, 0);
	XSync(dpy, False);
}

unsigned long
getcolor(const char *colstr)
{
	Colormap cmap = DefaultColormap(dpy, screen);
	XColor color;

	XAllocNamedColor(dpy, cmap, colstr, &color, &color);
	return color.pixel;
}

void
setfont(const char *fontstr)
{
	char **missing, *def;
	int i, n;

	missing = NULL;
	setlocale(LC_ALL, "");
	if(dc.font.set)
		XFreeFontSet(dpy, dc.font.set);
	dc.font.set = XCreateFontSet(dpy, fontstr, &missing, &n, &def);
	if(missing) {
		while(n--)
			fprintf(stderr, "missing fontset: %s\n", missing[n]);
		XFreeStringList(missing);
		if(dc.font.set) {
			XFreeFontSet(dpy, dc.font.set);
			dc.font.set = NULL;
		}
	}
	if(dc.font.set) {
		XFontSetExtents *font_extents;
		XFontStruct **xfonts;
		char **font_names;

		dc.font.ascent = dc.font.descent = 0;
		font_extents = XExtentsOfFontSet(dc.font.set);
		n = XFontsOfFontSet(dc.font.set, &xfonts, &font_names);
		for(i = 0, dc.font.ascent = 0, dc.font.descent = 0; i < n; i++) {
			if(dc.font.ascent < (*xfonts)->ascent)
				dc.font.ascent = (*xfonts)->ascent;
			if(dc.font.descent < (*xfonts)->descent)
				dc.font.descent = (*xfonts)->descent;
			xfonts++;
		}
	}
	else {
		if(dc.font.xfont)
			XFreeFont(dpy, dc.font.xfont);
		dc.font.xfont = NULL;
		dc.font.xfont = XLoadQueryFont(dpy, fontstr);
		if (!dc.font.xfont)
			dc.font.xfont = XLoadQueryFont(dpy, "fixed");
		if (!dc.font.xfont)
			eprint("error, cannot init 'fixed' font\n");
		dc.font.ascent = dc.font.xfont->ascent;
		dc.font.descent = dc.font.xfont->descent;
	}
	dc.font.height = dc.font.ascent + dc.font.descent;
}

unsigned int
textw(const char *text)
{
	return textnw(text, strlen(text)) + dc.font.height;
}
