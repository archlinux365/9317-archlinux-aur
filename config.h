/* modifier 0 means no modifier */
static int surfuseragent    = 1;  /* Append Surf version to default WebKit user agent */
static char *fulluseragent  = ""; /* Or override the whole user agent string */
static char *scriptfile     = "~/.surf/script.js";
static char *styledir       = "~/.surf/styles/";
static char *certdir        = "~/.surf/certificates/";
static char *cachedir       = "~/.surf/cache/";
static char *cookiefile     = "~/.surf/cookies.txt";

/* Webkit default features */
static Parameter defconfig[ParameterLast] = {
	SETB(AcceleratedCanvas,  1),
	SETB(Certificate,        0),
	SETB(CaretBrowsing,      0),
	SETV(CookiePolicies,     "@Aa"),
	SETV(DefaultCharset,     "UTF-8"),
	SETB(DiskCache,          1),
	SETB(DNSPrefetch,        0),
	SETI(FontSize,           12),
	SETB(FrameFlattening,    0),
	SETB(Geolocation,        0),
	SETB(HideBackground,     0),
	SETB(Inspector,          0),
	SETB(Java,               1),
	SETB(JavaScript,         1),
	SETB(KioskMode,          0),
	SETB(LoadImages,         1),
	SETB(MediaManualPlay,    0),
	SETB(Plugins,            1),
	SETV(PreferredLanguages, ((char *[]){ NULL })),
	SETB(RunInFullscreen,    0),
	SETB(ScrollBars,         1),
	SETB(ShowIndicators,     1),
	SETB(SiteQuirks,         1),
	SETB(SmoothScrolling,    0),
	SETB(SpellChecking,      0),
	SETV(SpellLanguages,     ((char *[]){ "en_US", NULL })),
	SETB(StrictTLS,          1),
	SETB(Style,              1),
	SETF(ZoomLevel,          1.0),
};

static UriParameters uriparams[] = {
	{ "(://|\\.)suckless\\.org(/|$)", {
	  FSETB(JavaScript, 0),
	  FSETB(Plugins,    0),
	}, },
};

/* default window size: width, height */
static int winsize[] = { 800, 600 };

static WebKitFindOptions findopts = WEBKIT_FIND_OPTIONS_CASE_INSENSITIVE |
                                    WEBKIT_FIND_OPTIONS_WRAP_AROUND;

#define PROMPT_GO   "Go:"
#define PROMPT_FIND "Find:"

/* SETPROP(readprop, setprop, prompt)*/
#define SETPROP(r, s, p) { \
        .v = (const char *[]){ "/bin/sh", "-c", \
             "prop=\"$(printf '%b' \"$(xprop -id $1 $2 " \
             "| sed \"s/^$2(STRING) = //;s/^\\\"\\(.*\\)\\\"$/\\1/\")\" " \
             "| dmenu -p \"$4\" -w $1)\" && xprop -id $1 -f $3 8s -set $3 \"$prop\"", \
             "surf-setprop", winid, r, s, p, NULL \
        } \
}

/* DOWNLOAD(URI, referer) */
#define DOWNLOAD(u, r) { \
        .v = (const char *[]){ "st", "-e", "/bin/sh", "-c",\
             "curl -g -L -J -O -A \"$1\" -b \"$2\" -c \"$2\"" \
             " -e \"$3\" \"$4\"; read", \
             "surf-download", useragent, cookiefile, r, u, NULL \
        } \
}

/* PLUMB(URI) */
/* This called when some URI which does not begin with "about:",
 * "http://" or "https://" should be opened.
 */
#define PLUMB(u) {\
        .v = (const char *[]){ "/bin/sh", "-c", \
             "xdg-open \"$0\"", u, NULL \
        } \
}

/* VIDEOPLAY(URI) */
#define VIDEOPLAY(u) {\
        .v = (const char *[]){ "/bin/sh", "-c", \
             "mpv --really-quiet \"$0\"", u, NULL \
        } \
}

/* styles */
/*
 * The iteration will stop at the first match, beginning at the beginning of
 * the list.
 */
static SiteSpecific styles[] = {
	/* regexp               file in $styledir */
	{ ".*",                 "default.css" },
};

/* certificates */
/*
 * Provide custom certificate for urls
 */
static SiteSpecific certs[] = {
	/* regexp               file in $certdir */
	{ "://suckless\\.org/", "suckless.org.crt" },
};

#define MODKEY GDK_CONTROL_MASK

/* hotkeys */
/*
 * If you use anything else but MODKEY and GDK_SHIFT_MASK, don't forget to
 * edit the CLEANMASK() macro.
 */
static Key keys[] = {
	/* modifier              keyval          function    arg */
	{ MODKEY,                GDK_KEY_g,      spawn,      SETPROP("_SURF_URI", "_SURF_GO", PROMPT_GO) },
	{ MODKEY,                GDK_KEY_f,      spawn,      SETPROP("_SURF_FIND", "_SURF_FIND", PROMPT_FIND) },
	{ MODKEY,                GDK_KEY_slash,  spawn,      SETPROP("_SURF_FIND", "_SURF_FIND", PROMPT_FIND) },

	{ 0,                     GDK_KEY_Escape, stop,       { 0 } },
	{ MODKEY,                GDK_KEY_c,      stop,       { 0 } },

	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_r,      reload,     { .b = 1 } },
	{ MODKEY,                GDK_KEY_r,      reload,     { .b = 0 } },

	{ MODKEY,                GDK_KEY_l,      navigate,   { .i = +1 } },
	{ MODKEY,                GDK_KEY_h,      navigate,   { .i = -1 } },

	/* Currently we have to use scrolling steps that WebKit2GTK+ gives us
	 * d: step down, u: step up, r: step right, l:step left
	 * D: page down, U: page up */
	{ MODKEY,                GDK_KEY_j,      scroll,     { .i = 'd' } },
	{ MODKEY,                GDK_KEY_k,      scroll,     { .i = 'u' } },
	{ MODKEY,                GDK_KEY_b,      scroll,     { .i = 'U' } },
	{ MODKEY,                GDK_KEY_space,  scroll,     { .i = 'D' } },
	{ MODKEY,                GDK_KEY_i,      scroll,     { .i = 'r' } },
	{ MODKEY,                GDK_KEY_u,      scroll,     { .i = 'l' } },


	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_j,      zoom,       { .i = -1 } },
	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_k,      zoom,       { .i = +1 } },
	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_q,      zoom,       { .i = 0  } },
	{ MODKEY,                GDK_KEY_minus,  zoom,       { .i = -1 } },
	{ MODKEY,                GDK_KEY_plus,   zoom,       { .i = +1 } },

	{ MODKEY,                GDK_KEY_p,      clipboard,  { .b = 1 } },
	{ MODKEY,                GDK_KEY_y,      clipboard,  { .b = 0 } },

	{ MODKEY,                GDK_KEY_n,      find,       { .i = +1 } },
	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_n,      find,       { .i = -1 } },

	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_p,      print,      { 0 } },
	{ MODKEY,                GDK_KEY_t,      showcert,   { 0 } },

	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_a,      togglecookiepolicy, { 0 } },
	{ 0,                     GDK_KEY_F11,    togglefullscreen, { 0 } },
	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_o,      toggleinspector, { 0 } },

	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_c,      toggle,     { .i = CaretBrowsing } },
	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_f,      toggle,     { .i = FrameFlattening } },
	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_g,      toggle,     { .i = Geolocation } },
	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_s,      toggle,     { .i = JavaScript } },
	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_i,      toggle,     { .i = LoadImages } },
	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_v,      toggle,     { .i = Plugins } },
	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_b,      toggle,     { .i = ScrollBars } },
	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_t,      toggle,     { .i = StrictTLS } },
	{ MODKEY|GDK_SHIFT_MASK, GDK_KEY_m,      toggle,     { .i = Style } },
};

/* button definitions */
/* target can be OnDoc, OnLink, OnImg, OnMedia, OnEdit, OnBar, OnSel, OnAny */
static Button buttons[] = {
	/* target       event mask      button  function        argument        stop event */
	{ OnLink,       0,              2,      clicknewwindow, { .b = 0 },     1 },
	{ OnLink,       MODKEY,         2,      clicknewwindow, { .b = 1 },     1 },
	{ OnLink,       MODKEY,         1,      clicknewwindow, { .b = 1 },     1 },
	{ OnAny,        0,              8,      clicknavigate,  { .i = -1 },    1 },
	{ OnAny,        0,              9,      clicknavigate,  { .i = +1 },    1 },
	{ OnMedia,      MODKEY,         1,      clickexternplayer, { 0 },       1 },
};
