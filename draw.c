/* (C)opyright MMIV-MMVII Anselm R. Garbe <garbeam at gmail dot com>
 * See LICENSE file for license details.
 */
#include "dwm.h"
#include <stdio.h>
#include <string.h>

/* static */

static Bool
isoccupied(unsigned int t)
{
	Client *c;
	for(c = clients; c; c = c->next)
		if(c->tags[t])
			return True;
	return False;
}

static unsigned int
textnw(const char *text, unsigned int len) {
	XRectangle r;

	if(dc.font.set) {
		XmbTextExtents(dc.font.set, text, len, NULL, &r);
		return r.width;
	}
	return XTextWidth(dc.font.xfont, text, len);
}

static void
drawtext(const char *text, unsigned long col[ColLast], Bool filledsquare, Bool emptysquare) {
	int x, y, w, h;
	static char buf[256];
	unsigned int len, olen;
	XGCValues gcv;
	XRectangle r = { dc.x, dc.y, dc.w, dc.h };
	XPoint pt[5];

	XSetForeground(dpy, dc.gc, col[ColBG]);
	XFillRectangles(dpy, dc.drawable, dc.gc, &r, 1);
	if(!text)
		return;
	w = 0;
	olen = len = strlen(text);
	if(len >= sizeof buf)
		len = sizeof buf - 1;
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
	gcv.foreground = col[ColFG];
	if(dc.font.set) {
		XChangeGC(dpy, dc.gc, GCForeground, &gcv);
		XmbDrawString(dpy, dc.drawable, dc.font.set, dc.gc, x, y, buf, len);
	}
	else {
		gcv.font = dc.font.xfont->fid;
		XChangeGC(dpy, dc.gc, GCForeground | GCFont, &gcv);
		XDrawString(dpy, dc.drawable, dc.gc, x, y, buf, len);
	}
	x = (h + 2) / 4;
	if(filledsquare) {
		r.x = dc.x + 1;
		r.y = dc.y + 1;
		r.width = r.height = x + 1;
		XFillRectangles(dpy, dc.drawable, dc.gc, &r, 1);
	}
	else if(emptysquare) {
		pt[0].x = dc.x + 1;
		pt[0].y = dc.y + 1;
		pt[1].x = x;
		pt[1].y = 0;
		pt[2].x = 0;
		pt[2].y = x;
		pt[3].x = -x;
		pt[3].y = 0;
		pt[4].x = 0;
		pt[4].y = -x;
		XDrawLines(dpy, dc.drawable, dc.gc, pt, 5, CoordModePrevious);
	}
}

/* extern */

void
drawall(void) {
	Client *c;

	for(c = clients; c; c = getnext(c->next))
		drawclient(c);
	drawstatus();
}

void
drawstatus(void) {
	int i, x;

	dc.x = dc.y = 0;
	for(i = 0; i < ntags; i++) {
		dc.w = textw(tags[i]);
		if(seltag[i])
			drawtext(tags[i], dc.sel, sel && sel->tags[i], isoccupied(i));
		else
			drawtext(tags[i], dc.norm, sel && sel->tags[i], isoccupied(i));
		dc.x += dc.w;
	}
	dc.w = bmw;
	drawtext(arrange == dofloat ? FLOATSYMBOL : TILESYMBOL, dc.status, False, False);
	x = dc.x + dc.w;
	dc.w = textw(stext);
	dc.x = bw - dc.w;
	if(dc.x < x) {
		dc.x = x;
		dc.w = bw - x;
	}
	drawtext(stext, dc.status, False, False);
	if((dc.w = dc.x - x) > bh) {
		dc.x = x;
		drawtext(sel ? sel->name : NULL, sel ? dc.sel : dc.norm, False, False);
	}
	XCopyArea(dpy, dc.drawable, barwin, dc.gc, 0, 0, bw, bh, 0, 0);
	XSync(dpy, False);
}

void
drawclient(Client *c) {
	if(c == sel && issel) {
		drawstatus();
		XSetWindowBorder(dpy, c->win, dc.sel[ColBG]);
		return;
	}
	XSetWindowBorder(dpy, c->win, dc.norm[ColBG]);
	XSync(dpy, False);
}

unsigned long
getcolor(const char *colstr) {
	Colormap cmap = DefaultColormap(dpy, screen);
	XColor color;

	if(!XAllocNamedColor(dpy, cmap, colstr, &color, &color))
		eprint("error, cannot allocate color '%s'\n", colstr);
	return color.pixel;
}

void
setfont(const char *fontstr) {
	char *def, **missing;
	int i, n;

	missing = NULL;
	if(dc.font.set)
		XFreeFontSet(dpy, dc.font.set);
	dc.font.set = XCreateFontSet(dpy, fontstr, &missing, &n, &def);
	if(missing) {
		while(n--)
			fprintf(stderr, "missing fontset: %s\n", missing[n]);
		XFreeStringList(missing);
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
		if(!(dc.font.xfont = XLoadQueryFont(dpy, fontstr)))
			eprint("error, cannot load font: '%s'\n", fontstr);
		dc.font.ascent = dc.font.xfont->ascent;
		dc.font.descent = dc.font.xfont->descent;
	}
	dc.font.height = dc.font.ascent + dc.font.descent;
}

unsigned int
textw(const char *text) {
	return textnw(text, strlen(text)) + dc.font.height;
}
