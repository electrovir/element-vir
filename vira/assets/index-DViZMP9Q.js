(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var Ce=(e=>(e.ElementExample="element-example",e.Page="page",e.Root="root",e))(Ce||{});function Q(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function F0(e){return Q(e).filter(t=>isNaN(Number(t)))}function xt(e){return F0(e).map(r=>e[r])}var x0=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,T0=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,N0=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Ni={Space_Separator:x0,ID_Start:T0,ID_Continue:N0},de={isSpaceSeparator(e){return typeof e=="string"&&Ni.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Ni.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Ni.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let bo,Se,Tt,Ls,tr,ft,ve,oa,Sn;var M0=function(t,r){bo=String(t),Se="start",Tt=[],Ls=0,tr=1,ft=0,ve=void 0,oa=void 0,Sn=void 0;do ve=B0(),R0[Se]();while(ve.type!=="eof");return typeof r=="function"?Do({"":Sn},"",r):Sn};function Do(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let s=0;s<n.length;s++){const i=String(s),o=Do(n,i,r);o===void 0?delete n[i]:Object.defineProperty(n,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(const s in n){const i=Do(n,s,r);i===void 0?delete n[s]:Object.defineProperty(n,s,{value:i,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let U,O,wn,kt,W;function B0(){for(U="default",O="",wn=!1,kt=1;;){W=Rt();const e=Uc[U]();if(e)return e}}function Rt(){if(bo[Ls])return String.fromCodePoint(bo.codePointAt(Ls))}function b(){const e=Rt();return e===`
`?(tr++,ft=0):e?ft+=e.length:ft++,e&&(Ls+=e.length),e}const Uc={default(){switch(W){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":b();return;case"/":b(),U="comment";return;case void 0:return b(),te("eof")}if(de.isSpaceSeparator(W)){b();return}return Uc[Se]()},comment(){switch(W){case"*":b(),U="multiLineComment";return;case"/":b(),U="singleLineComment";return}throw re(b())},multiLineComment(){switch(W){case"*":b(),U="multiLineCommentAsterisk";return;case void 0:throw re(b())}b()},multiLineCommentAsterisk(){switch(W){case"*":b();return;case"/":b(),U="default";return;case void 0:throw re(b())}b(),U="multiLineComment"},singleLineComment(){switch(W){case`
`:case"\r":case"\u2028":case"\u2029":b(),U="default";return;case void 0:return b(),te("eof")}b()},value(){switch(W){case"{":case"[":return te("punctuator",b());case"n":return b(),cr("ull"),te("null",null);case"t":return b(),cr("rue"),te("boolean",!0);case"f":return b(),cr("alse"),te("boolean",!1);case"-":case"+":b()==="-"&&(kt=-1),U="sign";return;case".":O=b(),U="decimalPointLeading";return;case"0":O=b(),U="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":O=b(),U="decimalInteger";return;case"I":return b(),cr("nfinity"),te("numeric",1/0);case"N":return b(),cr("aN"),te("numeric",NaN);case'"':case"'":wn=b()==='"',O="",U="string";return}throw re(b())},identifierNameStartEscape(){if(W!=="u")throw re(b());b();const e=Eo();switch(e){case"$":case"_":break;default:if(!de.isIdStartChar(e))throw ru();break}O+=e,U="identifierName"},identifierName(){switch(W){case"$":case"_":case"‌":case"‍":O+=b();return;case"\\":b(),U="identifierNameEscape";return}if(de.isIdContinueChar(W)){O+=b();return}return te("identifier",O)},identifierNameEscape(){if(W!=="u")throw re(b());b();const e=Eo();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!de.isIdContinueChar(e))throw ru();break}O+=e,U="identifierName"},sign(){switch(W){case".":O=b(),U="decimalPointLeading";return;case"0":O=b(),U="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":O=b(),U="decimalInteger";return;case"I":return b(),cr("nfinity"),te("numeric",kt*(1/0));case"N":return b(),cr("aN"),te("numeric",NaN)}throw re(b())},zero(){switch(W){case".":O+=b(),U="decimalPoint";return;case"e":case"E":O+=b(),U="decimalExponent";return;case"x":case"X":O+=b(),U="hexadecimal";return}return te("numeric",kt*0)},decimalInteger(){switch(W){case".":O+=b(),U="decimalPoint";return;case"e":case"E":O+=b(),U="decimalExponent";return}if(de.isDigit(W)){O+=b();return}return te("numeric",kt*Number(O))},decimalPointLeading(){if(de.isDigit(W)){O+=b(),U="decimalFraction";return}throw re(b())},decimalPoint(){switch(W){case"e":case"E":O+=b(),U="decimalExponent";return}if(de.isDigit(W)){O+=b(),U="decimalFraction";return}return te("numeric",kt*Number(O))},decimalFraction(){switch(W){case"e":case"E":O+=b(),U="decimalExponent";return}if(de.isDigit(W)){O+=b();return}return te("numeric",kt*Number(O))},decimalExponent(){switch(W){case"+":case"-":O+=b(),U="decimalExponentSign";return}if(de.isDigit(W)){O+=b(),U="decimalExponentInteger";return}throw re(b())},decimalExponentSign(){if(de.isDigit(W)){O+=b(),U="decimalExponentInteger";return}throw re(b())},decimalExponentInteger(){if(de.isDigit(W)){O+=b();return}return te("numeric",kt*Number(O))},hexadecimal(){if(de.isHexDigit(W)){O+=b(),U="hexadecimalInteger";return}throw re(b())},hexadecimalInteger(){if(de.isHexDigit(W)){O+=b();return}return te("numeric",kt*Number(O))},string(){switch(W){case"\\":b(),O+=P0();return;case'"':if(wn)return b(),te("string",O);O+=b();return;case"'":if(!wn)return b(),te("string",O);O+=b();return;case`
`:case"\r":throw re(b());case"\u2028":case"\u2029":L0(W);break;case void 0:throw re(b())}O+=b()},start(){switch(W){case"{":case"[":return te("punctuator",b())}U="value"},beforePropertyName(){switch(W){case"$":case"_":O=b(),U="identifierName";return;case"\\":b(),U="identifierNameStartEscape";return;case"}":return te("punctuator",b());case'"':case"'":wn=b()==='"',U="string";return}if(de.isIdStartChar(W)){O+=b(),U="identifierName";return}throw re(b())},afterPropertyName(){if(W===":")return te("punctuator",b());throw re(b())},beforePropertyValue(){U="value"},afterPropertyValue(){switch(W){case",":case"}":return te("punctuator",b())}throw re(b())},beforeArrayValue(){if(W==="]")return te("punctuator",b());U="value"},afterArrayValue(){switch(W){case",":case"]":return te("punctuator",b())}throw re(b())},end(){throw re(b())}};function te(e,t){return{type:e,value:t,line:tr,column:ft}}function cr(e){for(const t of e){if(Rt()!==t)throw re(b());b()}}function P0(){switch(Rt()){case"b":return b(),"\b";case"f":return b(),"\f";case"n":return b(),`
`;case"r":return b(),"\r";case"t":return b(),"	";case"v":return b(),"\v";case"0":if(b(),de.isDigit(Rt()))throw re(b());return"\0";case"x":return b(),I0();case"u":return b(),Eo();case`
`:case"\u2028":case"\u2029":return b(),"";case"\r":return b(),Rt()===`
`&&b(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw re(b());case void 0:throw re(b())}return b()}function I0(){let e="",t=Rt();if(!de.isHexDigit(t)||(e+=b(),t=Rt(),!de.isHexDigit(t)))throw re(b());return e+=b(),String.fromCodePoint(parseInt(e,16))}function Eo(){let e="",t=4;for(;t-- >0;){const r=Rt();if(!de.isHexDigit(r))throw re(b());e+=b()}return String.fromCodePoint(parseInt(e,16))}const R0={start(){if(ve.type==="eof")throw fr();Mi()},beforePropertyName(){switch(ve.type){case"identifier":case"string":oa=ve.value,Se="afterPropertyName";return;case"punctuator":us();return;case"eof":throw fr()}},afterPropertyName(){if(ve.type==="eof")throw fr();Se="beforePropertyValue"},beforePropertyValue(){if(ve.type==="eof")throw fr();Mi()},beforeArrayValue(){if(ve.type==="eof")throw fr();if(ve.type==="punctuator"&&ve.value==="]"){us();return}Mi()},afterPropertyValue(){if(ve.type==="eof")throw fr();switch(ve.value){case",":Se="beforePropertyName";return;case"}":us()}},afterArrayValue(){if(ve.type==="eof")throw fr();switch(ve.value){case",":Se="beforeArrayValue";return;case"]":us()}},end(){}};function Mi(){let e;switch(ve.type){case"punctuator":switch(ve.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=ve.value;break}if(Sn===void 0)Sn=e;else{const t=Tt[Tt.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,oa,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Tt.push(e),Array.isArray(e)?Se="beforeArrayValue":Se="beforePropertyName";else{const t=Tt[Tt.length-1];t==null?Se="end":Array.isArray(t)?Se="afterArrayValue":Se="afterPropertyValue"}}function us(){Tt.pop();const e=Tt[Tt.length-1];e==null?Se="end":Array.isArray(e)?Se="afterArrayValue":Se="afterPropertyValue"}function re(e){return Os(e===void 0?`JSON5: invalid end of input at ${tr}:${ft}`:`JSON5: invalid character '${Wc(e)}' at ${tr}:${ft}`)}function fr(){return Os(`JSON5: invalid end of input at ${tr}:${ft}`)}function ru(){return ft-=5,Os(`JSON5: invalid identifier character at ${tr}:${ft}`)}function L0(e){console.warn(`JSON5: '${Wc(e)}' in strings is not valid ECMAScript; consider escaping`)}function Wc(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Os(e){const t=new SyntaxError(e);return t.lineNumber=tr,t.columnNumber=ft,t}var O0=function(t,r,n){const s=[];let i="",o,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){o=[];for(const w of r){let A;typeof w=="string"?A=w:(typeof w=="number"||w instanceof String||w instanceof Number)&&(A=String(w)),A!==void 0&&o.indexOf(A)<0&&o.push(A)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),c("",{"":t});function c(w,A){let D=A[w];switch(D!=null&&(typeof D.toJSON5=="function"?D=D.toJSON5(w):typeof D.toJSON=="function"&&(D=D.toJSON(w))),a&&(D=a.call(A,w,D)),D instanceof Number?D=Number(D):D instanceof String?D=String(D):D instanceof Boolean&&(D=D.valueOf()),D){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof D=="string")return f(D);if(typeof D=="number")return String(D);if(typeof D=="object")return Array.isArray(D)?y(D):m(D)}function f(w){const A={"'":.1,'"':.2},D={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let S="";for(let L=0;L<w.length;L++){const q=w[L];switch(q){case"'":case'"':A[q]++,S+=q;continue;case"\0":if(de.isDigit(w[L+1])){S+="\\x00";continue}}if(D[q]){S+=D[q];continue}if(q<" "){let $e=q.charCodeAt(0).toString(16);S+="\\x"+("00"+$e).substring($e.length);continue}S+=q}const M=l||Object.keys(A).reduce((L,q)=>A[L]<A[q]?L:q);return S=S.replace(new RegExp(M,"g"),D[M]),M+S+M}function m(w){if(s.indexOf(w)>=0)throw TypeError("Converting circular structure to JSON5");s.push(w);let A=i;i=i+u;let D=o||Object.keys(w),S=[];for(const L of D){const q=c(L,w);if(q!==void 0){let $e=p(L)+":";u!==""&&($e+=" "),$e+=q,S.push($e)}}let M;if(S.length===0)M="{}";else{let L;if(u==="")L=S.join(","),M="{"+L+"}";else{let q=`,
`+i;L=S.join(q),M=`{
`+i+L+`,
`+A+"}"}}return s.pop(),i=A,M}function p(w){if(w.length===0)return f(w);const A=String.fromCodePoint(w.codePointAt(0));if(!de.isIdStartChar(A))return f(w);for(let D=A.length;D<w.length;D++)if(!de.isIdContinueChar(String.fromCodePoint(w.codePointAt(D))))return f(w);return w}function y(w){if(s.indexOf(w)>=0)throw TypeError("Converting circular structure to JSON5");s.push(w);let A=i;i=i+u;let D=[];for(let M=0;M<w.length;M++){const L=c(String(M),w);D.push(L!==void 0?L:"null")}let S;if(D.length===0)S="[]";else if(u==="")S="["+D.join(",")+"]";else{let M=`,
`+i,L=D.join(M);S=`[
`+i+L+`,
`+A+"]"}return s.pop(),i=A,S}};const _0={parse:M0,stringify:O0};var V0=_0;function h(e){try{return V0.stringify(e)}catch{return String(e)}}const U0=[".",":",";",",","?","!"],W0=new RegExp(`[${U0.join("")}]+$`);function nu(e){return e.replace(W0,"")}function Oe(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:h(e):""}function ri(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(n=>n&&nu(n));return t.length===1?t[0]:t.length?t.map((n,s)=>s===t.length-1?n:nu(n)).join(": "):""}function et(e){return e instanceof Error?e:new Error(Oe(e))}function ni(e,t){const r=et(e),n=ri(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var g;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(g||(g={}));var x;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(x||(x={}));x.ClientError,x.ServerError;g.Continue+"",x.Information,g.SwitchingProtocols+"",x.Information,g.Processing+"",x.Information,g.EarlyHints+"",x.Information,g.Ok+"",x.Success,g.Created+"",x.Success,g.Accepted+"",x.Success,g.NonAuthoritativeInformation+"",x.Success,g.NoContent+"",x.Success,g.ResetContent+"",x.Success,g.PartialContent+"",x.Success,g.MultiStatus+"",x.Success,g.AlreadyReported+"",x.Success,g.ImUsed+"",x.Success,g.MultipleChoices+"",x.Redirect,g.MovedPermanently+"",x.Redirect,g.Found+"",x.Redirect,g.SeeOther+"",x.Redirect,g.NotModified+"",x.Redirect,g.UseProxy+"",x.Redirect,g.Unused+"",x.Redirect,g.TemporaryRedirect+"",x.Redirect,g.PermanentRedirect+"",x.Redirect,g.BadRequest+"",x.ClientError,g.Unauthorized+"",x.ClientError,g.PaymentRequired+"",x.ClientError,g.Forbidden+"",x.ClientError,g.NotFound+"",x.ClientError,g.MethodNotAllowed+"",x.ClientError,g.NotAcceptable+"",x.ClientError,g.ProxyAuthenticationRequired+"",x.ClientError,g.RequestTimeout+"",x.ClientError,g.Conflict+"",x.ClientError,g.Gone+"",x.ClientError,g.LengthRequired+"",x.ClientError,g.PreconditionFailed+"",x.ClientError,g.PayloadTooLarge+"",x.ClientError,g.UriTooLong+"",x.ClientError,g.UnsupportedMediaType+"",x.ClientError,g.RangeNotSatisfiable+"",x.ClientError,g.ExpectationFailed+"",x.ClientError,g.ImATeapot+"",x.ClientError,g.MisdirectedRequest+"",x.ClientError,g.UnprocessableContent+"",x.ClientError,g.Locked+"",x.ClientError,g.FailedDependency+"",x.ClientError,g.TooEarly+"",x.ClientError,g.UpgradeRequired+"",x.ClientError,g.PreconditionRequired+"",x.ClientError,g.TooManyRequests+"",x.ClientError,g.RequestHeaderFieldsTooLarge+"",x.ClientError,g.UnavailableForLegalReasons+"",x.ClientError,g.InternalServerError+"",x.ServerError,g.NotImplemented+"",x.ServerError,g.BadGateway+"",x.ServerError,g.ServiceUnavailable+"",x.ServerError,g.GatewayTimeout+"",x.ServerError,g.HttpVersionNotSupported+"",x.ServerError,g.VariantAlsoNegotiates+"",x.ServerError,g.InsufficientStorage+"",x.ServerError,g.LoopDetected+"",x.ServerError,g.NotExtended+"",x.ServerError,g.NetworkAuthenticationRequired+"",x.ServerError;const xs={[x.Information]:[g.Continue,g.SwitchingProtocols,g.Processing,g.EarlyHints],[x.Success]:[g.Ok,g.Created,g.Accepted,g.NonAuthoritativeInformation,g.NoContent,g.ResetContent,g.PartialContent,g.MultiStatus,g.AlreadyReported,g.ImUsed],[x.Redirect]:[g.MultipleChoices,g.MovedPermanently,g.Found,g.SeeOther,g.NotModified,g.UseProxy,g.Unused,g.TemporaryRedirect,g.PermanentRedirect],[x.ClientError]:[g.BadRequest,g.Unauthorized,g.PaymentRequired,g.Forbidden,g.NotFound,g.MethodNotAllowed,g.NotAcceptable,g.ProxyAuthenticationRequired,g.RequestTimeout,g.Conflict,g.Gone,g.LengthRequired,g.PreconditionFailed,g.PayloadTooLarge,g.UriTooLong,g.UnsupportedMediaType,g.RangeNotSatisfiable,g.ExpectationFailed,g.ImATeapot,g.MisdirectedRequest,g.UnprocessableContent,g.Locked,g.FailedDependency,g.TooEarly,g.UpgradeRequired,g.PreconditionRequired,g.TooManyRequests,g.RequestHeaderFieldsTooLarge,g.UnavailableForLegalReasons],[x.ServerError]:[g.InternalServerError,g.NotImplemented,g.BadGateway,g.ServiceUnavailable,g.GatewayTimeout,g.HttpVersionNotSupported,g.VariantAlsoNegotiates,g.InsufficientStorage,g.LoopDetected,g.NotExtended,g.NetworkAuthenticationRequired]};function jc({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class qc{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(et(n))}})}}class $r extends Error{}class j0 extends $r{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class q0 extends $r{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class z0 extends $r{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Rr extends $r{}class zc extends $r{constructor(t){super(`Invalid unit ${t}`)}}class De extends $r{}class jt extends $r{constructor(){super("Zone is an abstract class")}}const F="numeric",mt="short",Ge="long",_s={year:F,month:F,day:F},Kc={year:F,month:mt,day:F},K0={year:F,month:mt,day:F,weekday:mt},Gc={year:F,month:Ge,day:F},Zc={year:F,month:Ge,day:F,weekday:Ge},Yc={hour:F,minute:F},Jc={hour:F,minute:F,second:F},Hc={hour:F,minute:F,second:F,timeZoneName:mt},Qc={hour:F,minute:F,second:F,timeZoneName:Ge},Xc={hour:F,minute:F,hourCycle:"h23"},ef={hour:F,minute:F,second:F,hourCycle:"h23"},tf={hour:F,minute:F,second:F,hourCycle:"h23",timeZoneName:mt},rf={hour:F,minute:F,second:F,hourCycle:"h23",timeZoneName:Ge},nf={year:F,month:F,day:F,hour:F,minute:F},sf={year:F,month:F,day:F,hour:F,minute:F,second:F},of={year:F,month:mt,day:F,hour:F,minute:F},af={year:F,month:mt,day:F,hour:F,minute:F,second:F},G0={year:F,month:mt,day:F,weekday:mt,hour:F,minute:F},uf={year:F,month:Ge,day:F,hour:F,minute:F,timeZoneName:mt},lf={year:F,month:Ge,day:F,hour:F,minute:F,second:F,timeZoneName:mt},cf={year:F,month:Ge,day:F,weekday:Ge,hour:F,minute:F,timeZoneName:Ge},ff={year:F,month:Ge,day:F,weekday:Ge,hour:F,minute:F,second:F,timeZoneName:Ge};class Zn{get type(){throw new jt}get name(){throw new jt}get ianaName(){return this.name}get isUniversal(){throw new jt}offsetName(t,r){throw new jt}formatOffset(t,r){throw new jt}offset(t){throw new jt}equals(t){throw new jt}get isValid(){throw new jt}}let Bi=null;class si extends Zn{static get instance(){return Bi===null&&(Bi=new si),Bi}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Ef(t,r,n)}formatOffset(t,r){return Fn(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const Ao=new Map;function Z0(e){let t=Ao.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),Ao.set(e,t)),t}const Y0={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function J0(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,s,i,o,a,u,l,c]=n;return[o,s,i,a,u,l,c]}function H0(e,t){const r=e.formatToParts(t),n=[];for(let s=0;s<r.length;s++){const{type:i,value:o}=r[s],a=Y0[i];i==="era"?n[a]=o:R(a)||(n[a]=parseInt(o,10))}return n}const Pi=new Map;class Ot extends Zn{static create(t){let r=Pi.get(t);return r===void 0&&Pi.set(t,r=new Ot(t)),r}static resetCache(){Pi.clear(),Ao.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Ot.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Ef(t,r,n,this.name)}formatOffset(t,r){return Fn(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=Z0(this.name);let[s,i,o,a,u,l,c]=n.formatToParts?H0(n,r):J0(n,r);a==="BC"&&(s=-Math.abs(s)+1);const m=oi({year:s,month:i,day:o,hour:u===24?0:u,minute:l,second:c,millisecond:0});let p=+r;const y=p%1e3;return p-=y>=0?y:1e3+y,(m-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let su={};function Q0(e,t={}){const r=JSON.stringify([e,t]);let n=su[r];return n||(n=new Intl.ListFormat(e,t),su[r]=n),n}const Co=new Map;function $o(e,t={}){const r=JSON.stringify([e,t]);let n=Co.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),Co.set(r,n)),n}const ko=new Map;function X0(e,t={}){const r=JSON.stringify([e,t]);let n=ko.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),ko.set(r,n)),n}const So=new Map;function em(e,t={}){const{base:r,...n}=t,s=JSON.stringify([e,n]);let i=So.get(s);return i===void 0&&(i=new Intl.RelativeTimeFormat(e,t),So.set(s,i)),i}let vn=null;function tm(){return vn||(vn=new Intl.DateTimeFormat().resolvedOptions().locale,vn)}const Fo=new Map;function df(e){let t=Fo.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Fo.set(e,t)),t}const xo=new Map;function rm(e){let t=xo.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...hf,...t}),xo.set(e,t)}return t}function nm(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,s;try{n=$o(e).resolvedOptions(),s=e}catch{const u=e.substring(0,r);n=$o(u).resolvedOptions(),s=u}const{numberingSystem:i,calendar:o}=n;return[s,i,o]}}function sm(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function im(e){const t=[];for(let r=1;r<=12;r++){const n=I.utc(2009,r,1);t.push(e(n))}return t}function om(e){const t=[];for(let r=1;r<=7;r++){const n=I.utc(2016,11,13+r);t.push(e(n))}return t}function ls(e,t,r,n){const s=e.listingMode();return s==="error"?null:s==="en"?r(t):n(t)}function am(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||df(e.locale).numberingSystem==="latn"}class um{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:s,floor:i,...o}=n;if(!r||Object.keys(o).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=X0(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):fa(t,3);return me(r,this.padTo)}}}class lm{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let s;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&Ot.create(a).valid?(s=a,this.dt=t):(s="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,s=t.zone.name):(s="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||s,this.dtf=$o(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class cm{constructor(t,r,n){this.opts={style:"long",...n},!r&&bf()&&(this.rtf=em(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):Mm(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const hf={firstDay:1,minimalDays:4,weekend:[6,7]};class J{static fromOpts(t){return J.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,s,i=!1){const o=t||se.defaultLocale,a=o||(i?"en-US":tm()),u=r||se.defaultNumberingSystem,l=n||se.defaultOutputCalendar,c=No(s)||se.defaultWeekSettings;return new J(a,u,l,c,o)}static resetCache(){vn=null,Co.clear(),ko.clear(),So.clear(),Fo.clear(),xo.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:s}={}){return J.create(t,r,n,s)}constructor(t,r,n,s,i){const[o,a,u]=nm(t);this.locale=o,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=s,this.intl=sm(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=am(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:J.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,No(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return ls(this,t,$f,()=>{const n=r?{month:t,day:"numeric"}:{month:t},s=r?"format":"standalone";return this.monthsCache[s][t]||(this.monthsCache[s][t]=im(i=>this.extract(i,n,"month"))),this.monthsCache[s][t]})}weekdays(t,r=!1){return ls(this,t,Ff,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},s=r?"format":"standalone";return this.weekdaysCache[s][t]||(this.weekdaysCache[s][t]=om(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[s][t]})}meridiems(){return ls(this,void 0,()=>xf,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[I.utc(2016,11,13,9),I.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return ls(this,t,Tf,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[I.utc(-40,1,1),I.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const s=this.dtFormatter(t,r),i=s.formatToParts(),o=i.find(a=>a.type.toLowerCase()===n);return o?o.value:null}numberFormatter(t={}){return new um(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new lm(t,this.intl,r)}relFormatter(t={}){return new cm(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Q0(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||df(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Df()?rm(this.locale):hf}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Ii=null;class Fe extends Zn{static get utcInstance(){return Ii===null&&(Ii=new Fe(0)),Ii}static instance(t){return t===0?Fe.utcInstance:new Fe(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new Fe(ai(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Fn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Fn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Fn(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class fm extends Zn{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Yt(e,t){if(R(e)||e===null)return t;if(e instanceof Zn)return e;if(ym(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?si.instance:r==="utc"||r==="gmt"?Fe.utcInstance:Fe.parseSpecifier(r)||Ot.create(e)}else return Xt(e)?Fe.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new fm(e)}const aa={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},iu={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},dm=aa.hanidec.replace(/[\[|\]]/g,"").split("");function hm(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(aa.hanidec)!==-1)t+=dm.indexOf(e[r]);else for(const s in iu){const[i,o]=iu[s];n>=i&&n<=o&&(t+=n-i)}}return parseInt(t,10)}else return t}const To=new Map;function mm(){To.clear()}function it({numberingSystem:e},t=""){const r=e||"latn";let n=To.get(r);n===void 0&&(n=new Map,To.set(r,n));let s=n.get(t);return s===void 0&&(s=new RegExp(`${aa[r]}${t}`),n.set(t,s)),s}let ou=()=>Date.now(),au="system",uu=null,lu=null,cu=null,fu=60,du,hu=null;class se{static get now(){return ou}static set now(t){ou=t}static set defaultZone(t){au=t}static get defaultZone(){return Yt(au,si.instance)}static get defaultLocale(){return uu}static set defaultLocale(t){uu=t}static get defaultNumberingSystem(){return lu}static set defaultNumberingSystem(t){lu=t}static get defaultOutputCalendar(){return cu}static set defaultOutputCalendar(t){cu=t}static get defaultWeekSettings(){return hu}static set defaultWeekSettings(t){hu=No(t)}static get twoDigitCutoffYear(){return fu}static set twoDigitCutoffYear(t){fu=t%100}static get throwOnInvalid(){return du}static set throwOnInvalid(t){du=t}static resetCaches(){J.resetCache(),Ot.resetCache(),I.resetCache(),mm()}}class lt{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const mf=[0,31,59,90,120,151,181,212,243,273,304,334],pf=[0,31,60,91,121,152,182,213,244,274,305,335];function Qe(e,t){return new lt("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function ua(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const s=n.getUTCDay();return s===0?7:s}function gf(e,t,r){return r+(Yn(e)?pf:mf)[t-1]}function yf(e,t){const r=Yn(e)?pf:mf,n=r.findIndex(i=>i<t),s=t-r[n];return{month:n+1,day:s}}function la(e,t){return(e-t+7)%7+1}function Vs(e,t=4,r=1){const{year:n,month:s,day:i}=e,o=gf(n,s,i),a=la(ua(n,s,i),r);let u=Math.floor((o-a+14-t)/7),l;return u<1?(l=n-1,u=Bn(l,t,r)):u>Bn(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...ui(e)}}function mu(e,t=4,r=1){const{weekYear:n,weekNumber:s,weekday:i}=e,o=la(ua(n,1,t),r),a=Or(n);let u=s*7+i-o-7+t,l;u<1?(l=n-1,u+=Or(l)):u>a?(l=n+1,u-=Or(n)):l=n;const{month:c,day:f}=yf(l,u);return{year:l,month:c,day:f,...ui(e)}}function Ri(e){const{year:t,month:r,day:n}=e,s=gf(t,r,n);return{year:t,ordinal:s,...ui(e)}}function pu(e){const{year:t,ordinal:r}=e,{month:n,day:s}=yf(t,r);return{year:t,month:n,day:s,...ui(e)}}function gu(e,t){if(!R(e.localWeekday)||!R(e.localWeekNumber)||!R(e.localWeekYear)){if(!R(e.weekday)||!R(e.weekNumber)||!R(e.weekYear))throw new Rr("Cannot mix locale-based week fields with ISO-based week fields");return R(e.localWeekday)||(e.weekday=e.localWeekday),R(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),R(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function pm(e,t=4,r=1){const n=ii(e.weekYear),s=Xe(e.weekNumber,1,Bn(e.weekYear,t,r)),i=Xe(e.weekday,1,7);return n?s?i?!1:Qe("weekday",e.weekday):Qe("week",e.weekNumber):Qe("weekYear",e.weekYear)}function gm(e){const t=ii(e.year),r=Xe(e.ordinal,1,Or(e.year));return t?r?!1:Qe("ordinal",e.ordinal):Qe("year",e.year)}function wf(e){const t=ii(e.year),r=Xe(e.month,1,12),n=Xe(e.day,1,Us(e.year,e.month));return t?r?n?!1:Qe("day",e.day):Qe("month",e.month):Qe("year",e.year)}function vf(e){const{hour:t,minute:r,second:n,millisecond:s}=e,i=Xe(t,0,23)||t===24&&r===0&&n===0&&s===0,o=Xe(r,0,59),a=Xe(n,0,59),u=Xe(s,0,999);return i?o?a?u?!1:Qe("millisecond",s):Qe("second",n):Qe("minute",r):Qe("hour",t)}function R(e){return typeof e>"u"}function Xt(e){return typeof e=="number"}function ii(e){return typeof e=="number"&&e%1===0}function ym(e){return typeof e=="string"}function wm(e){return Object.prototype.toString.call(e)==="[object Date]"}function bf(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Df(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function vm(e){return Array.isArray(e)?e:[e]}function yu(e,t,r){if(e.length!==0)return e.reduce((n,s)=>{const i=[t(s),s];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function bm(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function qr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function No(e){if(e==null)return null;if(typeof e!="object")throw new De("Week settings must be an object");if(!Xe(e.firstDay,1,7)||!Xe(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Xe(t,1,7)))throw new De("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Xe(e,t,r){return ii(e)&&e>=t&&e<=r}function Dm(e,t){return e-t*Math.floor(e/t)}function me(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function Gt(e){if(!(R(e)||e===null||e===""))return parseInt(e,10)}function dr(e){if(!(R(e)||e===null||e===""))return parseFloat(e)}function ca(e){if(!(R(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function fa(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function Yn(e){return e%4===0&&(e%100!==0||e%400===0)}function Or(e){return Yn(e)?366:365}function Us(e,t){const r=Dm(t-1,12)+1,n=e+(t-r)/12;return r===2?Yn(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function oi(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function wu(e,t,r){return-la(ua(e,1,t),r)+t-1}function Bn(e,t=4,r=1){const n=wu(e,t,r),s=wu(e+1,t,r);return(Or(e)-n+s)/7}function Mo(e){return e>99?e:e>se.twoDigitCutoffYear?1900+e:2e3+e}function Ef(e,t,r,n=null){const s=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const o={timeZoneName:t,...i},a=new Intl.DateTimeFormat(r,o).formatToParts(s).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function ai(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,s=r<0||Object.is(r,-0)?-n:n;return r*60+s}function Af(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new De(`Invalid unit value ${e}`);return t}function Ws(e,t){const r={};for(const n in e)if(qr(e,n)){const s=e[n];if(s==null)continue;r[t(n)]=Af(s)}return r}function Fn(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),s=e>=0?"+":"-";switch(t){case"short":return`${s}${me(r,2)}:${me(n,2)}`;case"narrow":return`${s}${r}${n>0?`:${n}`:""}`;case"techie":return`${s}${me(r,2)}${me(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function ui(e){return bm(e,["hour","minute","second","millisecond"])}const Em=["January","February","March","April","May","June","July","August","September","October","November","December"],Cf=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Am=["J","F","M","A","M","J","J","A","S","O","N","D"];function $f(e){switch(e){case"narrow":return[...Am];case"short":return[...Cf];case"long":return[...Em];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const kf=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Sf=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Cm=["M","T","W","T","F","S","S"];function Ff(e){switch(e){case"narrow":return[...Cm];case"short":return[...Sf];case"long":return[...kf];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const xf=["AM","PM"],$m=["Before Christ","Anno Domini"],km=["BC","AD"],Sm=["B","A"];function Tf(e){switch(e){case"narrow":return[...Sm];case"short":return[...km];case"long":return[...$m];default:return null}}function Fm(e){return xf[e.hour<12?0:1]}function xm(e,t){return Ff(t)[e.weekday-1]}function Tm(e,t){return $f(t)[e.month-1]}function Nm(e,t){return Tf(t)[e.year<0?0:1]}function Mm(e,t,r="always",n=!1){const s={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${s[e][0]}`;case-1:return f?"yesterday":`last ${s[e][0]}`;case 0:return f?"today":`this ${s[e][0]}`}}const o=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=s[e],c=n?u?l[1]:l[2]||l[1]:u?s[e][0]:e;return o?`${a} ${c} ago`:`in ${a} ${c}`}function vu(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const Bm={D:_s,DD:Kc,DDD:Gc,DDDD:Zc,t:Yc,tt:Jc,ttt:Hc,tttt:Qc,T:Xc,TT:ef,TTT:tf,TTTT:rf,f:nf,ff:of,fff:uf,ffff:cf,F:sf,FF:af,FFF:lf,FFFF:ff};class Ae{static create(t,r={}){return new Ae(t,r)}static parseFormat(t){let r=null,n="",s=!1;const i=[];for(let o=0;o<t.length;o++){const a=t.charAt(o);a==="'"?(n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),r=null,n="",s=!s):s||a===r?n+=a:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return Bm[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return me(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",s=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(p,y)=>this.loc.extract(t,p,y),o=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",a=()=>n?Fm(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(p,y)=>n?Tm(t,p):i(y?{month:p}:{month:p,day:"numeric"},"month"),l=(p,y)=>n?xm(t,p):i(y?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),c=p=>{const y=Ae.macroTokenToFormatOpts(p);return y?this.formatWithSystemDefault(t,y):p},f=p=>n?Nm(t,p):i({era:p},"era"),m=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return s?i({day:"numeric"},"day"):this.num(t.day);case"dd":return s?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return s?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return s?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return s?i({month:"numeric"},"month"):this.num(t.month);case"MM":return s?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return s?i({year:"numeric"},"year"):this.num(t.year);case"yy":return s?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return s?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return s?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(p)}};return vu(Ae.parseFormat(r),m)}formatDurationFromString(t,r){const n=u=>{switch(u[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},s=u=>l=>{const c=n(l);return c?this.num(u.get(c),l.length):l},i=Ae.parseFormat(r),o=i.reduce((u,{literal:l,val:c})=>l?u:u.concat(c),[]),a=t.shiftTo(...o.map(n).filter(u=>u));return vu(i,s(a))}}const Nf=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function nn(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function sn(...e){return t=>e.reduce(([r,n,s],i)=>{const[o,a,u]=i(t,s);return[{...r,...o},a||n,u]},[{},null,1]).slice(0,2)}function on(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const s=r.exec(e);if(s)return n(s)}return[null,null]}function Mf(...e){return(t,r)=>{const n={};let s;for(s=0;s<e.length;s++)n[e[s]]=Gt(t[r+s]);return[n,null,r+s]}}const Bf=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Pm=`(?:${Bf.source}?(?:\\[(${Nf.source})\\])?)?`,da=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Pf=RegExp(`${da.source}${Pm}`),ha=RegExp(`(?:T${Pf.source})?`),Im=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Rm=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Lm=/(\d{4})-?(\d{3})/,Om=Mf("weekYear","weekNumber","weekDay"),_m=Mf("year","ordinal"),Vm=/(\d{4})-(\d\d)-(\d\d)/,If=RegExp(`${da.source} ?(?:${Bf.source}|(${Nf.source}))?`),Um=RegExp(`(?: ${If.source})?`);function _r(e,t,r){const n=e[t];return R(n)?r:Gt(n)}function Wm(e,t){return[{year:_r(e,t),month:_r(e,t+1,1),day:_r(e,t+2,1)},null,t+3]}function an(e,t){return[{hours:_r(e,t,0),minutes:_r(e,t+1,0),seconds:_r(e,t+2,0),milliseconds:ca(e[t+3])},null,t+4]}function Jn(e,t){const r=!e[t]&&!e[t+1],n=ai(e[t+1],e[t+2]),s=r?null:Fe.instance(n);return[{},s,t+3]}function Hn(e,t){const r=e[t]?Ot.create(e[t]):null;return[{},r,t+1]}const jm=RegExp(`^T?${da.source}$`),qm=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function zm(e){const[t,r,n,s,i,o,a,u,l]=e,c=t[0]==="-",f=u&&u[0]==="-",m=(p,y=!1)=>p!==void 0&&(y||p&&c)?-p:p;return[{years:m(dr(r)),months:m(dr(n)),weeks:m(dr(s)),days:m(dr(i)),hours:m(dr(o)),minutes:m(dr(a)),seconds:m(dr(u),u==="-0"),milliseconds:m(ca(l),f)}]}const Km={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function ma(e,t,r,n,s,i,o){const a={year:t.length===2?Mo(Gt(t)):Gt(t),month:Cf.indexOf(r)+1,day:Gt(n),hour:Gt(s),minute:Gt(i)};return o&&(a.second=Gt(o)),e&&(a.weekday=e.length>3?kf.indexOf(e)+1:Sf.indexOf(e)+1),a}const Gm=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Zm(e){const[,t,r,n,s,i,o,a,u,l,c,f]=e,m=ma(t,s,n,r,i,o,a);let p;return u?p=Km[u]:l?p=0:p=ai(c,f),[m,new Fe(p)]}function Ym(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Jm=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Hm=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Qm=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function bu(e){const[,t,r,n,s,i,o,a]=e;return[ma(t,s,n,r,i,o,a),Fe.utcInstance]}function Xm(e){const[,t,r,n,s,i,o,a]=e;return[ma(t,a,r,n,s,i,o),Fe.utcInstance]}const ep=nn(Im,ha),tp=nn(Rm,ha),rp=nn(Lm,ha),np=nn(Pf),Rf=sn(Wm,an,Jn,Hn),sp=sn(Om,an,Jn,Hn),ip=sn(_m,an,Jn,Hn),op=sn(an,Jn,Hn);function ap(e){return on(e,[ep,Rf],[tp,sp],[rp,ip],[np,op])}function up(e){return on(Ym(e),[Gm,Zm])}function lp(e){return on(e,[Jm,bu],[Hm,bu],[Qm,Xm])}function cp(e){return on(e,[qm,zm])}const fp=sn(an);function dp(e){return on(e,[jm,fp])}const hp=nn(Vm,Um),mp=nn(If),pp=sn(an,Jn,Hn);function gp(e){return on(e,[hp,Rf],[mp,pp])}const Du="Invalid Duration",Lf={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},yp={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Lf},Ye=146097/400,kr=146097/4800,wp={years:{quarters:4,months:12,weeks:Ye/7,days:Ye,hours:Ye*24,minutes:Ye*24*60,seconds:Ye*24*60*60,milliseconds:Ye*24*60*60*1e3},quarters:{months:3,weeks:Ye/28,days:Ye/4,hours:Ye*24/4,minutes:Ye*24*60/4,seconds:Ye*24*60*60/4,milliseconds:Ye*24*60*60*1e3/4},months:{weeks:kr/7,days:kr,hours:kr*24,minutes:kr*24*60,seconds:kr*24*60*60,milliseconds:kr*24*60*60*1e3},...Lf},vr=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],vp=vr.slice(0).reverse();function qt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new j(n)}function Of(e,t){let r=t.milliseconds??0;for(const n of vp.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function Eu(e,t){const r=Of(e,t)<0?-1:1;vr.reduceRight((n,s)=>{if(R(t[s]))return n;if(n){const i=t[n]*r,o=e[s][n],a=Math.floor(i/o);t[s]+=a*r,t[n]-=a*o*r}return s},null),vr.reduce((n,s)=>{if(R(t[s]))return n;if(n){const i=t[n]%1;t[n]-=i,t[s]+=i*e[n][s]}return s},null)}function bp(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class j{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?wp:yp;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||J.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return j.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new De(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new j({values:Ws(t,j.normalizeUnit),loc:J.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Xt(t))return j.fromMillis(t);if(j.isDuration(t))return t;if(typeof t=="object")return j.fromObject(t);throw new De(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=cp(t);return n?j.fromObject(n,r):j.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=dp(t);return n?j.fromObject(n,r):j.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new De("need to specify a reason the Duration is invalid");const n=t instanceof lt?t:new lt(t,r);if(se.throwOnInvalid)throw new z0(n);return new j({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new zc(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?Ae.create(this.loc,n).formatDurationFromString(this,t):Du}toHuman(t={}){if(!this.isValid)return Du;const r=vr.map(n=>{const s=this.values[n];return R(s)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(s)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=fa(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},I.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Of(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=j.fromDurationLike(t),n={};for(const s of vr)(qr(r.values,s)||qr(this.values,s))&&(n[s]=r.get(s)+this.get(s));return qt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=j.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Af(t(this.values[n],n));return qt(this,{values:r},!0)}get(t){return this[j.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Ws(t,j.normalizeUnit)};return qt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:s}={}){const o={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:s,conversionAccuracy:n};return qt(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Eu(this.matrix,t),qt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=bp(this.normalize().shiftToAll().toObject());return qt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>j.normalizeUnit(o));const r={},n={},s=this.toObject();let i;for(const o of vr)if(t.indexOf(o)>=0){i=o;let a=0;for(const l in n)a+=this.matrix[l][o]*n[l],n[l]=0;Xt(s[o])&&(a+=s[o]);const u=Math.trunc(a);r[o]=u,n[o]=(a*1e3-u*1e3)/1e3}else Xt(s[o])&&(n[o]=s[o]);for(const o in n)n[o]!==0&&(r[i]+=o===i?n[o]:n[o]/this.matrix[i][o]);return Eu(this.matrix,r),qt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return qt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,s){return n===void 0||n===0?s===void 0||s===0:n===s}for(const n of vr)if(!r(this.values[n],t.values[n]))return!1;return!0}}const Sr="Invalid Interval";function Dp(e,t){return!e||!e.isValid?ce.invalid("missing or invalid start"):!t||!t.isValid?ce.invalid("missing or invalid end"):t<e?ce.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ce{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new De("need to specify a reason the Interval is invalid");const n=t instanceof lt?t:new lt(t,r);if(se.throwOnInvalid)throw new q0(n);return new ce({invalid:n})}static fromDateTimes(t,r){const n=fn(t),s=fn(r),i=Dp(n,s);return i??new ce({start:n,end:s})}static after(t,r){const n=j.fromDurationLike(r),s=fn(t);return ce.fromDateTimes(s,s.plus(n))}static before(t,r){const n=j.fromDurationLike(r),s=fn(t);return ce.fromDateTimes(s.minus(n),s)}static fromISO(t,r){const[n,s]=(t||"").split("/",2);if(n&&s){let i,o;try{i=I.fromISO(n,r),o=i.isValid}catch{o=!1}let a,u;try{a=I.fromISO(s,r),u=a.isValid}catch{u=!1}if(o&&u)return ce.fromDateTimes(i,a);if(o){const l=j.fromISO(s,r);if(l.isValid)return ce.after(i,l)}else if(u){const l=j.fromISO(n,r);if(l.isValid)return ce.before(a,l)}}return ce.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let s;return r?.useLocaleWeeks?s=this.end.reconfigure({locale:n.locale}):s=this.end,s=s.startOf(t,r),Math.floor(s.diff(n,t).get(t))+(s.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?ce.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(fn).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),n=[];let{s}=this,i=0;for(;s<this.e;){const o=r[i]||this.e,a=+o>+this.e?this.e:o;n.push(ce.fromDateTimes(s,a)),s=a,i+=1}return n}splitBy(t){const r=j.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,s=1,i;const o=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*s));i=+a>+this.e?this.e:a,o.push(ce.fromDateTimes(n,i)),n=i,s+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:ce.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return ce.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((s,i)=>s.s-i.s).reduce(([s,i],o)=>i?i.overlaps(o)||i.abutsStart(o)?[s,i.union(o)]:[s.concat([i]),o]:[s,o],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const s=[],i=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),o=Array.prototype.concat(...i),a=o.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&s.push(ce.fromDateTimes(r,u.time)),r=null);return ce.merge(s)}difference(...t){return ce.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Sr}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=_s,r={}){return this.isValid?Ae.create(this.s.loc.clone(r),t).formatInterval(this):Sr}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Sr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Sr}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Sr}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:Sr}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):j.invalid(this.invalidReason)}mapEndpoints(t){return ce.fromDateTimes(t(this.s),t(this.e))}}class cs{static hasDST(t=se.defaultZone){const r=I.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Ot.isValidZone(t)}static normalizeZone(t){return Yt(t,se.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||J.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||J.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||J.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||J.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||J.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:s=null}={}){return(s||J.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:s=null}={}){return(s||J.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return J.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return J.create(r,null,"gregory").eras(t)}static features(){return{relative:bf(),localeWeek:Df()}}}function Au(e,t){const r=s=>s.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(j.fromMillis(n).as("days"))}function Ep(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=Au(u,l);return(c-c%7)/7}],["days",Au]],s={},i=e;let o,a;for(const[u,l]of n)r.indexOf(u)>=0&&(o=u,s[u]=l(e,t),a=i.plus(s),a>t?(s[u]--,e=i.plus(s),e>t&&(a=e,s[u]--,e=i.plus(s))):e=a);return[e,s,a,o]}function Ap(e,t,r,n){let[s,i,o,a]=Ep(e,t,r);const u=t-s,l=r.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);l.length===0&&(o<t&&(o=s.plus({[a]:1})),o!==s&&(i[a]=(i[a]||0)+u/(o-s)));const c=j.fromObject(i,n);return l.length>0?j.fromMillis(u,n).shiftTo(...l).plus(c):c}const Cp="missing Intl.DateTimeFormat.formatToParts support";function G(e,t=r=>r){return{regex:e,deser:([r])=>t(hm(r))}}const $p=" ",_f=`[ ${$p}]`,Vf=new RegExp(_f,"g");function kp(e){return e.replace(/\./g,"\\.?").replace(Vf,_f)}function Cu(e){return e.replace(/\./g,"").replace(Vf," ").toLowerCase()}function ot(e,t){return e===null?null:{regex:RegExp(e.map(kp).join("|")),deser:([r])=>e.findIndex(n=>Cu(r)===Cu(n))+t}}function $u(e,t){return{regex:e,deser:([,r,n])=>ai(r,n),groups:t}}function fs(e){return{regex:e,deser:([t])=>t}}function Sp(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Fp(e,t){const r=it(t),n=it(t,"{2}"),s=it(t,"{3}"),i=it(t,"{4}"),o=it(t,"{6}"),a=it(t,"{1,2}"),u=it(t,"{1,3}"),l=it(t,"{1,6}"),c=it(t,"{1,9}"),f=it(t,"{2,4}"),m=it(t,"{4,6}"),p=A=>({regex:RegExp(Sp(A.val)),deser:([D])=>D,literal:!0}),w=(A=>{if(e.literal)return p(A);switch(A.val){case"G":return ot(t.eras("short"),0);case"GG":return ot(t.eras("long"),0);case"y":return G(l);case"yy":return G(f,Mo);case"yyyy":return G(i);case"yyyyy":return G(m);case"yyyyyy":return G(o);case"M":return G(a);case"MM":return G(n);case"MMM":return ot(t.months("short",!0),1);case"MMMM":return ot(t.months("long",!0),1);case"L":return G(a);case"LL":return G(n);case"LLL":return ot(t.months("short",!1),1);case"LLLL":return ot(t.months("long",!1),1);case"d":return G(a);case"dd":return G(n);case"o":return G(u);case"ooo":return G(s);case"HH":return G(n);case"H":return G(a);case"hh":return G(n);case"h":return G(a);case"mm":return G(n);case"m":return G(a);case"q":return G(a);case"qq":return G(n);case"s":return G(a);case"ss":return G(n);case"S":return G(u);case"SSS":return G(s);case"u":return fs(c);case"uu":return fs(a);case"uuu":return G(r);case"a":return ot(t.meridiems(),0);case"kkkk":return G(i);case"kk":return G(f,Mo);case"W":return G(a);case"WW":return G(n);case"E":case"c":return G(r);case"EEE":return ot(t.weekdays("short",!1),1);case"EEEE":return ot(t.weekdays("long",!1),1);case"ccc":return ot(t.weekdays("short",!0),1);case"cccc":return ot(t.weekdays("long",!0),1);case"Z":case"ZZ":return $u(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return $u(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return fs(/[a-z_+-/]{1,256}?/i);case" ":return fs(/[^\S\n\r]/);default:return p(A)}})(e)||{invalidReason:Cp};return w.token=e,w}const xp={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Tp(e,t,r){const{type:n,value:s}=e;if(n==="literal"){const u=/^\s+$/.test(s);return{literal:!u,val:u?" ":s}}const i=t[n];let o=n;n==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=r.hour12?"hour12":"hour24");let a=xp[o];if(typeof a=="object"&&(a=a[i]),a)return{literal:!1,val:a}}function Np(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function Mp(e,t,r){const n=e.match(t);if(n){const s={};let i=1;for(const o in r)if(qr(r,o)){const a=r[o],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(s[a.token.val[0]]=a.deser(n.slice(i,i+u))),i+=u}return[n,s]}else return[n,{}]}function Bp(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return R(e.z)||(r=Ot.create(e.z)),R(e.Z)||(r||(r=new Fe(e.Z)),n=e.Z),R(e.q)||(e.M=(e.q-1)*3+1),R(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),R(e.u)||(e.S=ca(e.u)),[Object.keys(e).reduce((i,o)=>{const a=t(o);return a&&(i[a]=e[o]),i},{}),r,n]}let Li=null;function Pp(){return Li||(Li=I.fromMillis(1555555555555)),Li}function Ip(e,t){if(e.literal)return e;const r=Ae.macroTokenToFormatOpts(e.val),n=qf(r,t);return n==null||n.includes(void 0)?e:n}function Uf(e,t){return Array.prototype.concat(...e.map(r=>Ip(r,t)))}class Wf{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=Uf(Ae.parseFormat(r),t),this.units=this.tokens.map(n=>Fp(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,s]=Np(this.units);this.regex=RegExp(n,"i"),this.handlers=s}}explainFromTokens(t){if(this.isValid){const[r,n]=Mp(t,this.regex,this.handlers),[s,i,o]=n?Bp(n):[null,null,void 0];if(qr(n,"a")&&qr(n,"H"))throw new Rr("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:s,zone:i,specificOffset:o}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function jf(e,t,r){return new Wf(e,r).explainFromTokens(t)}function Rp(e,t,r){const{result:n,zone:s,specificOffset:i,invalidReason:o}=jf(e,t,r);return[n,s,i,o]}function qf(e,t){if(!e)return null;const n=Ae.create(t,e).dtFormatter(Pp()),s=n.formatToParts(),i=n.resolvedOptions();return s.map(o=>Tp(o,e,i))}const Oi="Invalid DateTime",Lp=864e13;function bn(e){return new lt("unsupported zone",`the zone "${e.name}" is not supported`)}function _i(e){return e.weekData===null&&(e.weekData=Vs(e.c)),e.weekData}function Vi(e){return e.localWeekData===null&&(e.localWeekData=Vs(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function hr(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new I({...r,...t,old:r})}function zf(e,t,r){let n=e-t*60*1e3;const s=r.offset(n);if(t===s)return[n,t];n-=(s-t)*60*1e3;const i=r.offset(n);return s===i?[n,s]:[e-Math.min(s,i)*60*1e3,Math.max(s,i)]}function ds(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Ts(e,t,r){return zf(oi(e),t,r)}function ku(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),s=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:s,day:Math.min(e.c.day,Us(n,s))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=j.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=oi(i);let[u,l]=zf(a,r,e.zone);return o!==0&&(u+=o,l=e.zone.offset(u)),{ts:u,o:l}}function Fr(e,t,r,n,s,i){const{setZone:o,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=I.fromObject(e,{...r,zone:u,specificOffset:i});return o?l:l.setZone(a)}else return I.invalid(new lt("unparsable",`the input "${s}" can't be parsed as ${n}`))}function hs(e,t,r=!0){return e.isValid?Ae.create(J.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Ui(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=me(e.c.year,r?6:4),t?(n+="-",n+=me(e.c.month),n+="-",n+=me(e.c.day)):(n+=me(e.c.month),n+=me(e.c.day)),n}function Su(e,t,r,n,s,i){let o=me(e.c.hour);return t?(o+=":",o+=me(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=":")):o+=me(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=me(e.c.second),(e.c.millisecond!==0||!n)&&(o+=".",o+=me(e.c.millisecond,3))),s&&(e.isOffsetFixed&&e.offset===0&&!i?o+="Z":e.o<0?(o+="-",o+=me(Math.trunc(-e.o/60)),o+=":",o+=me(Math.trunc(-e.o%60))):(o+="+",o+=me(Math.trunc(e.o/60)),o+=":",o+=me(Math.trunc(e.o%60)))),i&&(o+="["+e.zone.ianaName+"]"),o}const Kf={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Op={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},_p={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Gf=["year","month","day","hour","minute","second","millisecond"],Vp=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Up=["year","ordinal","hour","minute","second","millisecond"];function Wp(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new zc(e);return t}function Fu(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Wp(e)}}function jp(e){if(Dn===void 0&&(Dn=se.now()),e.type!=="iana")return e.offset(Dn);const t=e.name;let r=Bo.get(t);return r===void 0&&(r=e.offset(Dn),Bo.set(t,r)),r}function xu(e,t){const r=Yt(t.zone,se.defaultZone);if(!r.isValid)return I.invalid(bn(r));const n=J.fromObject(t);let s,i;if(R(e.year))s=se.now();else{for(const u of Gf)R(e[u])&&(e[u]=Kf[u]);const o=wf(e)||vf(e);if(o)return I.invalid(o);const a=jp(r);[s,i]=Ts(e,a,r)}return new I({ts:s,zone:r,loc:n,o:i})}function Tu(e,t,r){const n=R(r.round)?!0:r.round,s=(o,a)=>(o=fa(o,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(o,a)),i=o=>r.calendary?t.hasSame(e,o)?0:t.startOf(o).diff(e.startOf(o),o).get(o):t.diff(e,o).get(o);if(r.unit)return s(i(r.unit),r.unit);for(const o of r.units){const a=i(o);if(Math.abs(a)>=1)return s(a,o)}return s(e>t?-0:0,r.units[r.units.length-1])}function Nu(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let Dn;const Bo=new Map;class I{constructor(t){const r=t.zone||se.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new lt("invalid input"):null)||(r.isValid?null:bn(r));this.ts=R(t.ts)?se.now():t.ts;let s=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[s,i]=[t.old.c,t.old.o];else{const a=Xt(t.o)&&!t.old?t.o:r.offset(this.ts);s=ds(this.ts,a),n=Number.isNaN(s.year)?new lt("invalid input"):null,s=n?null:s,i=n?null:a}this._zone=r,this.loc=t.loc||J.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=s,this.o=i,this.isLuxonDateTime=!0}static now(){return new I({})}static local(){const[t,r]=Nu(arguments),[n,s,i,o,a,u,l]=r;return xu({year:n,month:s,day:i,hour:o,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=Nu(arguments),[n,s,i,o,a,u,l]=r;return t.zone=Fe.utcInstance,xu({year:n,month:s,day:i,hour:o,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=wm(t)?t.valueOf():NaN;if(Number.isNaN(n))return I.invalid("invalid input");const s=Yt(r.zone,se.defaultZone);return s.isValid?new I({ts:n,zone:s,loc:J.fromObject(r)}):I.invalid(bn(s))}static fromMillis(t,r={}){if(Xt(t))return t<-864e13||t>Lp?I.invalid("Timestamp out of range"):new I({ts:t,zone:Yt(r.zone,se.defaultZone),loc:J.fromObject(r)});throw new De(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Xt(t))return new I({ts:t*1e3,zone:Yt(r.zone,se.defaultZone),loc:J.fromObject(r)});throw new De("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=Yt(r.zone,se.defaultZone);if(!n.isValid)return I.invalid(bn(n));const s=J.fromObject(r),i=Ws(t,Fu),{minDaysInFirstWeek:o,startOfWeek:a}=gu(i,s),u=se.now(),l=R(r.specificOffset)?n.offset(u):r.specificOffset,c=!R(i.ordinal),f=!R(i.year),m=!R(i.month)||!R(i.day),p=f||m,y=i.weekYear||i.weekNumber;if((p||c)&&y)throw new Rr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&c)throw new Rr("Can't mix ordinal dates with month/day");const w=y||i.weekday&&!p;let A,D,S=ds(u,l);w?(A=Vp,D=Op,S=Vs(S,o,a)):c?(A=Up,D=_p,S=Ri(S)):(A=Gf,D=Kf);let M=!1;for(const gt of A){const Et=i[gt];R(Et)?M?i[gt]=D[gt]:i[gt]=S[gt]:M=!0}const L=w?pm(i,o,a):c?gm(i):wf(i),q=L||vf(i);if(q)return I.invalid(q);const $e=w?mu(i,o,a):c?pu(i):i,[st,Ne]=Ts($e,l,n),Ue=new I({ts:st,zone:n,o:Ne,loc:s});return i.weekday&&p&&t.weekday!==Ue.weekday?I.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${Ue.toISO()}`):Ue.isValid?Ue:I.invalid(Ue.invalid)}static fromISO(t,r={}){const[n,s]=ap(t);return Fr(n,s,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,s]=up(t);return Fr(n,s,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,s]=lp(t);return Fr(n,s,r,"HTTP",r)}static fromFormat(t,r,n={}){if(R(t)||R(r))throw new De("fromFormat requires an input string and a format");const{locale:s=null,numberingSystem:i=null}=n,o=J.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0}),[a,u,l,c]=Rp(o,t,r);return c?I.invalid(c):Fr(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return I.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,s]=gp(t);return Fr(n,s,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new De("need to specify a reason the DateTime is invalid");const n=t instanceof lt?t:new lt(t,r);if(se.throwOnInvalid)throw new j0(n);return new I({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=qf(t,J.fromObject(r));return n?n.map(s=>s?s.val:null).join(""):null}static expandFormat(t,r={}){return Uf(Ae.parseFormat(t),J.fromObject(r)).map(s=>s.val).join("")}static resetCache(){Dn=void 0,Bo.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?_i(this).weekYear:NaN}get weekNumber(){return this.isValid?_i(this).weekNumber:NaN}get weekday(){return this.isValid?_i(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Vi(this).weekday:NaN}get localWeekNumber(){return this.isValid?Vi(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Vi(this).weekYear:NaN}get ordinal(){return this.isValid?Ri(this.c).ordinal:NaN}get monthShort(){return this.isValid?cs.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?cs.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?cs.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?cs.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=oi(this.c),s=this.zone.offset(n-t),i=this.zone.offset(n+t),o=this.zone.offset(n-s*r),a=this.zone.offset(n-i*r);if(o===a)return[this];const u=n-o*r,l=n-a*r,c=ds(u,o),f=ds(l,a);return c.hour===f.hour&&c.minute===f.minute&&c.second===f.second&&c.millisecond===f.millisecond?[hr(this,{ts:u}),hr(this,{ts:l})]:[this]}get isInLeapYear(){return Yn(this.year)}get daysInMonth(){return Us(this.year,this.month)}get daysInYear(){return this.isValid?Or(this.year):NaN}get weeksInWeekYear(){return this.isValid?Bn(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Bn(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:s}=Ae.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:s}}toUTC(t=0,r={}){return this.setZone(Fe.instance(t),r)}toLocal(){return this.setZone(se.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=Yt(t,se.defaultZone),t.equals(this.zone))return this;if(t.isValid){let s=this.ts;if(r||n){const i=t.offset(this.ts),o=this.toObject();[s]=Ts(o,i,t)}return hr(this,{ts:s,zone:t})}else return I.invalid(bn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const s=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return hr(this,{loc:s})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Ws(t,Fu),{minDaysInFirstWeek:n,startOfWeek:s}=gu(r,this.loc),i=!R(r.weekYear)||!R(r.weekNumber)||!R(r.weekday),o=!R(r.ordinal),a=!R(r.year),u=!R(r.month)||!R(r.day),l=a||u,c=r.weekYear||r.weekNumber;if((l||o)&&c)throw new Rr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&o)throw new Rr("Can't mix ordinal dates with month/day");let f;i?f=mu({...Vs(this.c,n,s),...r},n,s):R(r.ordinal)?(f={...this.toObject(),...r},R(r.day)&&(f.day=Math.min(Us(f.year,f.month),f.day))):f=pu({...Ri(this.c),...r});const[m,p]=Ts(f,this.o,this.zone);return hr(this,{ts:m,o:p})}plus(t){if(!this.isValid)return this;const r=j.fromDurationLike(t);return hr(this,ku(this,r))}minus(t){if(!this.isValid)return this;const r=j.fromDurationLike(t).negate();return hr(this,ku(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},s=j.normalizeUnit(t);switch(s){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(s==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:o}=this;o<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(s==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?Ae.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Oi}toLocaleString(t=_s,r={}){return this.isValid?Ae.create(this.loc.clone(r),t).formatDateTime(this):Oi}toLocaleParts(t={}){return this.isValid?Ae.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:s=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const o=t==="extended";let a=Ui(this,o);return a+="T",a+=Su(this,o,r,n,s,i),a}toISODate({format:t="extended"}={}){return this.isValid?Ui(this,t==="extended"):null}toISOWeekDate(){return hs(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:s=!1,extendedZone:i=!1,format:o="extended"}={}){return this.isValid?(s?"T":"")+Su(this,o==="extended",r,t,n,i):null}toRFC2822(){return hs(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return hs(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Ui(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let s="HH:mm:ss.SSS";return(r||t)&&(n&&(s+=" "),r?s+="z":t&&(s+="ZZ")),hs(this,s,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Oi}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return j.invalid("created by diffing an invalid DateTime");const s={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=vm(r).map(j.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,u=o?t:this,l=Ap(a,u,i,s);return o?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(I.now(),t,r)}until(t){return this.isValid?ce.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const s=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(r,n)<=s&&s<=i.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||I.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let s=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(s=t.unit,i=void 0),Tu(r,this.plus(n),{...t,numeric:"always",units:s,unit:i})}toRelativeCalendar(t={}){return this.isValid?Tu(t.base||I.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(I.isDateTime))throw new De("min requires all arguments be DateTimes");return yu(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(I.isDateTime))throw new De("max requires all arguments be DateTimes");return yu(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:s=null,numberingSystem:i=null}=n,o=J.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0});return jf(o,t,r)}static fromStringExplain(t,r,n={}){return I.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:s=null}=r,i=J.fromOpts({locale:n,numberingSystem:s,defaultToEN:!0});return new Wf(i,t)}static fromFormatParser(t,r,n={}){if(R(t)||R(r))throw new De("fromFormatParser requires an input string and a format parser");const{locale:s=null,numberingSystem:i=null}=n,o=J.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0});if(!o.equals(r.locale))throw new De(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=r.explainFromTokens(t);return c?I.invalid(c):Fr(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return _s}static get DATE_MED(){return Kc}static get DATE_MED_WITH_WEEKDAY(){return K0}static get DATE_FULL(){return Gc}static get DATE_HUGE(){return Zc}static get TIME_SIMPLE(){return Yc}static get TIME_WITH_SECONDS(){return Jc}static get TIME_WITH_SHORT_OFFSET(){return Hc}static get TIME_WITH_LONG_OFFSET(){return Qc}static get TIME_24_SIMPLE(){return Xc}static get TIME_24_WITH_SECONDS(){return ef}static get TIME_24_WITH_SHORT_OFFSET(){return tf}static get TIME_24_WITH_LONG_OFFSET(){return rf}static get DATETIME_SHORT(){return nf}static get DATETIME_SHORT_WITH_SECONDS(){return sf}static get DATETIME_MED(){return of}static get DATETIME_MED_WITH_SECONDS(){return af}static get DATETIME_MED_WITH_WEEKDAY(){return G0}static get DATETIME_FULL(){return uf}static get DATETIME_FULL_WITH_SECONDS(){return lf}static get DATETIME_HUGE(){return cf}static get DATETIME_HUGE_WITH_SECONDS(){return ff}}function fn(e){if(I.isDateTime(e))return e;if(e&&e.valueOf&&Xt(e.valueOf()))return I.fromJSDate(e);if(e&&typeof e=="object")return I.fromObject(e);throw new De(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var B;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(B||(B={}));B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";const Zf=[B.Milliseconds,B.Seconds,B.Minutes,B.Hours,B.Days,B.Weeks,B.Months,B.Quarters,B.Years];B.Milliseconds+"",B.Seconds+"",B.Minutes+"",B.Hours+"",B.Days+"",B.Weeks+"",B.Months+"",B.Quarters+"",B.Years+"";function qp(e){return Zf.filter(t=>e[t])}function Po(e,{roundToDigits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function zp(e){return Po(Math.max(e-.4,0),{roundToDigits:0})}function Mu(e){return e===0?0:Math.sign(e)}function zr(e,t,r={}){const n={},s={roundToDigits:r.roundToDigits==null?void 0:Math.round(Math.abs(r.roundToDigits))},i=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0);let a=j.fromObject(e).as(B.Milliseconds);const u=qp(t).reverse(),l=Mu(a);u.forEach((p,y)=>{const w=y===u.length-1;if(i&&o||i)n[p]=1/0;else if(o)n[p]=-1/0;else if(p===B.Milliseconds)n.milliseconds=Po(a,s);else{const A=j.fromObject({milliseconds:a}).as(p),D=Math.sign(A),S=Math.abs(A),M=w?Po(S,s):Math.floor(s.roundToDigits==null?S:zp(S)),L=M===0?0:M*D;n[p]=L,a-=j.fromObject({[p]:L}).as(B.Milliseconds),l!==Mu(a)&&(a=0)}});let c=!1;const f=[],m=Zf.toReversed().filter(p=>n[p]?(c=!0,!0):c?(f.push(p),!1):!0);if(m.length<u.length){const p={};m.forEach(w=>p[w]=!0);const y=zr(e,p,s);return f.forEach(w=>y[w]=0),y}return n}var N;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(N||(N={}));N.Year,N.Hour,N.Minute,N.Second,N.Millisecond;N.Quarter,N.Month,N.Week,N.Day;N.Millisecond,N.Second,N.Minute,N.Hour,N.Day,N.Week,N.Month,N.Quarter,N.Year;var Ee;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(Ee||(Ee={}));Ee.Sunday+"",Ee.Monday+"",Ee.Tuesday+"",Ee.Wednesday+"",Ee.Thursday+"",Ee.Friday+"",Ee.Saturday+"";Ee.Sunday,Ee.Monday,Ee.Tuesday,Ee.Wednesday,Ee.Thursday,Ee.Friday,Ee.Saturday;var Pe;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(Pe||(Pe={}));Pe.January,Pe.February,Pe.March,Pe.April,Pe.May,Pe.June,Pe.July,Pe.August,Pe.September,Pe.October,Pe.November,Pe.December;const Bu={min:1,max:12},Pu={min:1,max:31},Iu={min:0,max:23},Ru={min:0,max:59},Lu={min:0,max:59},Ou={min:0,max:999};function Pn(e){const t=new qc,r=zr(e,{milliseconds:!0}).milliseconds;return r!==1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}class d extends Error{name="AssertionError";constructor(t,r){super(ri(r,t)||"Assertion failed.")}}const _u={interval:{milliseconds:100},timeout:{seconds:10}},Wi=Symbol("not set");async function Kp(e,t,r){const{callback:n,extraAssertionArgs:s,failureMessage:i,options:o}=Gp(t),a=zr(o.timeout,{milliseconds:!0}).milliseconds,u=zr(o.interval,{milliseconds:!0});let l=Wi,c;async function f(){try{l=r?n():await n(),e(l,...s)}catch(p){l=Wi,c=et(p)}}const m=Date.now();for(;l===Wi;)if(await f(),await Pn(u),Date.now()-m>=a){const y=`${i?`${i}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw ni(c,y)}return l}function $(e,t=!1){return(...r)=>Kp(e,r,t)}function Gp(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Yf(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Yf(e){return{interval:e?.interval||_u.interval,timeout:e?.timeout||_u.timeout}}const dn={isFalse(e,t){if(e!==!1)throw new d(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new d(`'${h(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new d(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new d(`'${h(e)}' is not truthy.`,t)}},Jf={assert:dn,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new d(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new d(`'${h(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new d(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new d(`'${h(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:$(dn.isFalse),isFalsy:$(dn.isFalsy),isTrue:$(dn.isTrue),isTruthy:$(dn.isTruthy)}};function Zp(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new d(`${h(e)} does not end with ${h(t)}}`,r)}else if(e[e.length-1]!==t)throw new d(`${h(e)} does not end with ${h(t)}}`,r)}function Yp(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new d(`${h(e)} ends with ${h(t)}}`,r)}else if(e[e.length-1]===t)throw new d(`${h(e)} ends with ${h(t)}}`,r)}function Jp(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new d(`${h(e)} does not start with ${h(t)}}`,r)}else if(e[0]!==t)throw new d(`${h(e)} does not start with ${h(t)}}`,r)}function Hp(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new d(`${h(e)} starts with ${h(t)}}`,r)}else if(e[0]===t)throw new d(`${h(e)} starts with ${h(t)}}`,r)}const hn={endsWith:Zp,endsWithout:Yp,startsWith:Jp,startsWithout:Hp},Hf={assert:hn,check:{endsWith:(e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t,endsWithout:(e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t,startsWith:(e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t,startsWithout:(e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t},assertWrap:{endsWith:(e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new d(`${h(e)} does not end with ${h(t)}}`,r)}else if(e[e.length-1]!==t)throw new d(`${h(e)} does not end with ${h(t)}}`,r);return e},endsWithout:(e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new d(`${h(e)} ends with ${h(t)}}`,r)}else if(e[e.length-1]===t)throw new d(`${h(e)} ends with ${h(t)}}`,r);return e},startsWith:(e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new d(`${h(e)} does not start with ${h(t)}}`,r)}else if(e[0]!==t)throw new d(`${h(e)} does not start with ${h(t)}}`,r);return e},startsWithout:(e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new d(`${h(e)} starts with ${h(t)}}`,r)}else if(e[0]===t)throw new d(`${h(e)} starts with ${h(t)}}`,r);return e}},checkWrap:{endsWith:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e},endsWithout:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e},startsWith:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e},startsWithout:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e}},waitUntil:{endsWith:$(hn.endsWith),endsWithout:$(hn.endsWithout),startsWith:$(hn.startsWith),startsWithout:$(hn.startsWithout)}};function Qp(e,t,r){const n=xt(t);if(!n.includes(e))throw new d(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function St(e,t){return xt(t).includes(e)}const ji={isEnumValue(e,t,r){Qp(e,t,r)},isNotEnumValue(e,t,r){const n=xt(t);if(n.includes(e))throw new d(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},Qf={assert:ji,check:{isEnumValue:St,isNotEnumValue(e,t){return!xt(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=xt(t);if(!n.includes(e))throw new d(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=xt(t);if(n.includes(e))throw new d(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(xt(t).includes(e))return e},isNotEnumValue(e,t){if(!xt(t).includes(e))return e}},waitUntil:{isEnumValue:$(ji.isEnumValue),isNotEnumValue:$(ji.isNotEnumValue)}},qi={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new d(`${h(e)} is not an object.`,r);if(!t||typeof t!="object")throw new d(`${h(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(s=>{const i=e[s],o=t[s];if(i!==o)throw new d(`Entries are not equal at key '${String(s)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],a=t[i];return o!==a}))throw new d("Entries are equal.",r)}},Xf={assert:qi,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const s=e[n],i=t[n];return s===i})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const s=e[n],i=t[n];return s!==i})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new d(`${h(e)} is not an object.`,r);if(!t||typeof t!="object")throw new d(`${h(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(s=>{const i=e[s],o=t[s];if(i!==o)throw new d(`Entries are not equal at key '${String(s)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],a=t[i];return o!==a}))return e;throw new d("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(s=>{const i=e[s],o=t[s];return i===o}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const i=e[s],o=t[s];return i!==o}))return e}},waitUntil:{entriesEqual:$(qi.entriesEqual),notEntriesEqual:$(qi.notEntriesEqual)}};function js(e,t){return JSON.stringify(e)===JSON.stringify(t)}function In(e,t){if(!(e===t||js(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!js(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(i=>{try{In(e[i],t[i])}catch(o){throw new Error(`JSON objects are not equal at key '${i}': ${Oe(o)}`)}})}throw new Error("Values are not JSON equal.")}}function En(e,t){if(e===t||js(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!js(r,n)?!1:Object.keys(e).every(i=>En(e[i],t[i]))}return!1}const zi={jsonEquals(e,t,r){try{In(e,t)}catch(n){throw new d(Oe(n),r)}},notJsonEquals(e,t,r){try{In(e,t)}catch{return}throw new d("Values are JSON equal.",r)}},ed={assert:zi,check:{jsonEquals(e,t){return En(e,t)},notJsonEquals(e,t){return!En(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return In(e,t),e}catch(n){throw new d(Oe(n),r)}},notJsonEquals(e,t,r){try{In(e,t)}catch{return e}throw new d("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(En(e,t))return e},notJsonEquals(e,t){if(!En(e,t))return e}},waitUntil:{jsonEquals:$(zi.jsonEquals),notJsonEquals:$(zi.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function Vu(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function td(){this._key="chai/deep-eql__"+Math.random()+Date.now()}td.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var rd=typeof WeakMap=="function"?WeakMap:td;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function Uu(e,t,r){if(!r||Kr(e)||Kr(t))return null;var n=r.get(e);if(n){var s=n.get(t);if(typeof s=="boolean")return s}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function ms(e,t,r,n){if(!(!r||Kr(e)||Kr(t))){var s=r.get(e);s?s.set(t,n):(s=new rd,s.set(t,n),r.set(e,s))}}function at(e,t,r){if(r&&r.comparator)return Wu(e,t,r);var n=nd(e,t);return n!==null?n:Wu(e,t,r)}function nd(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:Kr(e)||Kr(t)?!1:null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function Wu(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new rd;var n=r&&r.comparator,s=Uu(e,t,r.memoize);if(s!==null)return s;var i=Uu(t,e,r.memoize);if(i!==null)return i;if(n){var o=n(e,t);if(o===!1||o===!0)return ms(e,t,r.memoize,o),o;var a=nd(e,t);if(a!==null)return a}var u=Vu(e);if(u!==Vu(t))return ms(e,t,r.memoize,!1),!1;ms(e,t,r.memoize,!0);var l=Xp(e,t,u,r);return ms(e,t,r.memoize,l),l}function Xp(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return at(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return sd(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Dr(e,t,n);case"RegExp":return eg(e,t);case"Generator":return tg(e,t,n);case"DataView":return Dr(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Dr(new Uint8Array(e),new Uint8Array(t),n);case"Set":return ju(e,t,n);case"Map":return ju(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return ng(e,t,n)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function eg(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function ju(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],s=[];return e.forEach(function(o,a){n.push([o,a])}),t.forEach(function(o,a){s.push([o,a])}),Dr(n.sort(),s.sort(),r)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Dr(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var s=-1;++s<n;)if(at(e[s],t[s],r)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function tg(e,t,r){return Dr(Io(e),Io(t),r)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function rg(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function qu(e){if(rg(e))try{return Io(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function Io(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function zu(e){var t=[];for(var r in e)t.push(r);return t}function Ku(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var s=r[n];Object.getOwnPropertyDescriptor(e,s).enumerable&&t.push(s)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function sd(e,t,r,n){var s=r.length;if(s===0)return!0;for(var i=0;i<s;i+=1)if(at(e[r[i]],t[r[i]],n)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function ng(e,t,r){var n=zu(e),s=zu(t),i=Ku(e),o=Ku(t);if(n=n.concat(i),s=s.concat(o),n.length&&n.length===s.length)return Dr(Gu(n).sort(),Gu(s).sort())===!1?!1:sd(e,t,n,r);var a=qu(e),u=qu(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Dr(a,u,r)):n.length===0&&a.length===0&&s.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function Kr(e){return e===null||typeof e!="object"}function Gu(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}const Kt={strictEquals(e,t,r){if(e!==t)throw new d(`

${h(e)}

does not strictly equal

${h(t)}

`,r)},notStrictEquals(e,t,r){if(e===t)throw new d(`

${h(e)}

strictly equals

${h(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw new d(`

${h(e)}

does not loosely equal

${h(t)}

`,r)},notLooseEquals(e,t,r){if(e==t)throw new d(`

${h(e)}

loosely equals

${h(t)}

`,r)},deepEquals(e,t,r){if(!at(e,t))throw new d(`

${h(e)}

does not deeply equal

${h(t)}

`,r)},notDeepEquals(e,t,r){if(at(e,t))throw new d(`

${h(e)}

deeply equals

${h(t)}

`,r)}},id=Kt.deepEquals,od={assert:Kt,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return at(e,t)},notDeepEquals(e,t){return!at(e,t)}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw new d(`

${h(e)}

does not strictly equal

${h(t)}

`,r)},notStrictEquals(e,t,r){if(e===t)throw new d(`

${h(e)}

strictly equals

${h(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw new d(`

${h(e)}

does not loosely equal

${h(t)}

`,r)},notLooseEquals(e,t,r){if(e==t)throw new d(`

${h(e)}

loosely equals

${h(t)}

`,r);return e},deepEquals(e,t,r){if(at(e,t))return e;throw new d(`

${h(e)}

does not deeply equal

${h(t)}

`,r)},notDeepEquals(e,t,r){if(at(e,t))throw new d(`

${h(e)}

deeply equals

${h(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(at(e,t))return e},notDeepEquals(e,t){if(!at(e,t))return e}},waitUntil:{strictEquals:$(Kt.strictEquals),notStrictEquals:$(Kt.notStrictEquals),looseEquals:$(Kt.looseEquals),notLooseEquals:$(Kt.notLooseEquals),deepEquals:$(Kt.deepEquals),notDeepEquals:$(Kt.notDeepEquals)}};function We(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function Je(e,t){return typeof t=="string"?t.includes(e):We(t,e)}const Ct={hasValue(e,t,r){if(!We(e,t))throw new d(`'${h(e)}' does not have value '${h(t)}'.`,r)},lacksValue(e,t,r){if(We(e,t))throw new d(`'${h(e)}' has value '${h(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(s=>!(typeof s=="string"&&e.includes(s)));else try{const s=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!s.includes(i))}catch{throw new d(`'${h(e)}' does not have values '${h(t)}'.`,r)}if(n.length)throw new d(`'${h(e)}' does not have values '${h(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(s=>typeof s=="string"&&e.includes(s));else try{const s=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>s.includes(i))}catch{}if(n.length)throw new d(`'${h(e)}' has values '${h(n)}'.`,r)},isIn(e,t,r){if(!Je(e,t))throw new d(`'${h(e)}'

is not in

${h(t)}.`,r)},isNotIn(e,t,r){if(Je(e,t))throw new d(`'${h(e)}'

is in

${h(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new d(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new d(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new d(`'${h(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new d(`'${h(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new d(`'${h(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new d(`'${h(e)}' is not empty.`,t)}}},ad={assert:Ct,check:{hasValue(e,t){return We(e,t)},lacksValue(e,t){return!We(e,t)},hasValues(e,t){return t.every(r=>We(e,r))},lacksValues(e,t){return t.every(r=>!We(e,r))},isIn(e,t){return Je(e,t)},isNotIn(e,t){return!Je(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!We(e,t))throw new d(`'${h(e)}' does not have value '${h(t)}'.`,r);return e},lacksValue(e,t,r){if(We(e,t))throw new d(`'${h(e)}' has value '${h(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(s=>!(typeof s=="string"&&e.includes(s)));else try{const s=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!s.includes(i))}catch{throw new d(`'${h(e)}' does not have values '${h(t)}'.`,r)}if(n.length)throw new d(`'${h(e)}' does not have values '${h(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(s=>typeof s=="string"&&e.includes(s));else try{const s=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>s.includes(i))}catch{}if(n.length)throw new d(`'${h(e)}' has values '${h(n)}'.`,r);return e},isIn(e,t,r){if(!Je(e,t))throw new d(`'${h(e)}'

is not in

${h(t)}.`,r);return e},isNotIn(e,t,r){if(Je(e,t))throw new d(`'${h(e)}'

is in

${h(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new d(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new d(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new d(`'${h(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new d(`'${h(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new d(`'${h(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new d(`'${h(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(We(e,t))return e},lacksValue(e,t){if(!We(e,t))return e},hasValues(e,t){if(t.every(r=>We(e,r)))return e},lacksValues(e,t){if(!t.every(r=>We(e,r)))return e},isIn(e,t){if(Je(e,t))return e},isNotIn(e,t){if(!Je(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:$(Ct.hasValue),lacksValue:$(Ct.lacksValue),hasValues:$(Ct.hasValues),lacksValues:$(Ct.lacksValues),isIn:$(Ct.isIn),isNotIn:$(Ct.isNotIn),isEmpty:$(Ct.isEmpty),isNotEmpty:$(Ct.isNotEmpty)}},Ki={isHttpStatus(e,t){if(!St(e,g))throw new d(`${h(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(St(e,g)){if(!Je(e,xs[t]))throw new d(`${h(e)} is not a '${t}' HTTP status.`,r)}else throw new d(`${h(e)} is not a valid HTTP status.`,r)}},ud={assert:Ki,check:{isHttpStatus(e){return St(e,g)},isHttpStatusCategory(e,t){return St(e,g)&&Je(e,xs[t])}},assertWrap:{isHttpStatus(e,t){if(!St(e,g))throw new d(`${h(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(St(e,g)){if(!Je(e,xs[t]))throw new d(`${h(e)} is not a '${t}' HTTP status.`,r)}else throw new d(`${h(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(St(e,g))return e},isHttpStatusCategory(e,t){if(St(e,g)&&Je(e,xs[t]))return e}},waitUntil:{isHttpStatus:$(Ki.isHttpStatus),isHttpStatusCategory:$(Ki.isHttpStatusCategory)}},Gi={instanceOf(e,t,r){if(!(e instanceof t))throw new d(`'${h(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new d(`'${h(e)}' is an instance of '${t.name}'`,r)}},ld={assert:Gi,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new d(`'${h(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new d(`'${h(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:$(Gi.instanceOf),notInstanceOf:$(Gi.notInstanceOf)}},sg=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ne(e,t){return sg.some(r=>{try{return r(e,t)}catch{return!1}})}const mr={isKeyOf(e,t,r){if(!ne(t,e))throw new d(`'${String(e)}' is not a key of '${h(t)}'.`,r)},isNotKeyOf(e,t,r){if(ne(t,e))throw new d(`'${String(e)}' is a key of '${h(t)}'.`,r)},hasKey(e,t,r){if(!ne(e,t))throw new d(`'${h(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(ne(e,t))throw new d(`'${h(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(s=>!ne(e,s));if(n.length)throw new d(`'${h(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(s=>ne(e,s));if(n.length)throw new d(`'${h(e)}' does not lack keys '${n.join(",")}'.`,r)}},cd={assert:mr,check:{isKeyOf(e,t){return ne(t,e)},isNotKeyOf(e,t){return!ne(t,e)},hasKey:ne,lacksKey(e,t){return!ne(e,t)},hasKeys(e,t){return t.every(r=>ne(e,r))},lacksKeys(e,t){return t.every(r=>!ne(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!ne(t,e))throw new d(`'${String(e)}' is not a key of '${h(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(ne(t,e))throw new d(`'${String(e)}' is a key of '${h(t)}'.`,r);return e},hasKey(e,t,r){if(!ne(e,t))throw new d(`'${h(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(ne(e,t))throw new d(`'${h(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(s=>!ne(e,s));if(n.length)throw new d(`'${h(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(s=>ne(e,s));if(n.length)throw new d(`'${h(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(ne(t,e))return e},isNotKeyOf(e,t){if(!ne(t,e))return e},hasKey(e,t){if(ne(e,t))return e},lacksKey(e,t){if(!ne(e,t))return e},hasKeys(e,t){if(t.every(r=>ne(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!ne(e,r)))return e}},waitUntil:{isKeyOf:$(mr.isKeyOf),isNotKeyOf:$(mr.isNotKeyOf),hasKey:$(mr.hasKey),lacksKey:$(mr.lacksKey),hasKeys:$(mr.hasKeys),lacksKeys:$(mr.lacksKeys)}};function ig(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:Q(e).length)<t)throw new d(`Length '${e.length}' is not at least '${t}'.`,r)}function og(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:Q(e).length)!==t)throw new d(`Length '${e.length}' is not exactly '${t}'.`,r)}const Zi={isLengthAtLeast:ig,isLengthExactly:og},fd={assert:Zi,check:{isLengthAtLeast:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Q(e).length)>=t,isLengthExactly:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:Q(e).length)===t},assertWrap:{isLengthAtLeast:(e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Q(e).length)<t)throw new d(`Length '${e.length}' is not at least '${t}'.`,r);return e},isLengthExactly:(e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Q(e).length)!==t)throw new d(`Length '${e.length}' is not exactly '${t}'.`,r);return e}},checkWrap:{isLengthAtLeast:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Q(e).length)>=t)return e},isLengthExactly:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:Q(e).length)===t)return e}},waitUntil:{isLengthAtLeast:$(Zi.isLengthAtLeast),isLengthExactly:$(Zi.isLengthExactly)}},ag={never(e){throw new d("This code should not have executed.",e)}},dd={assert:ag,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Yi={isDefined(e,t){if(e==null)throw new d(`'${h(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new d(`'${h(e)}' is not a nullish.`,t)}},hd={assert:Yi,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new d(`'${h(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new d(`'${h(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:$(Yi.isDefined),isNullish:$(Yi.isNullish)}},Me={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new d(`${e} is not within the bounds ${h({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new d(`${e} is not outside the bounds ${h({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new d(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new d(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new d(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new d(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new d(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new d(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new d(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new d(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new d(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new d(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new d(`${e} is within ±${r} of ${t}`,n)}},md={assert:Me,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new d(`${e} is not within the bounds ${h({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new d(`${e} is not outside the bounds ${h({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new d(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new d(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new d(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new d(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new d(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new d(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new d(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new d(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new d(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new d(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new d(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:$(Me.isInBounds),isOutBounds:$(Me.isOutBounds),isInteger:$(Me.isInteger),isNotInteger:$(Me.isNotInteger),isAbove:$(Me.isAbove),isAtLeast:$(Me.isAtLeast),isBelow:$(Me.isBelow),isAtMost:$(Me.isAtMost),isNaN:$(Me.isNaN),isFinite:$(Me.isFinite),isInfinite:$(Me.isInfinite),isApproximately:$(Me.isApproximately),isNotApproximately:$(Me.isNotApproximately)}};function ug(e,t,r,n,s){return Qn(...li(e,t,r,n,s),!1)}function li(e,t,r,n,s){const i=Array.isArray(r);return[i?e:id,i?t:e,i?r:t,i?n:r,i?s:n]}function Qn(e,t,r,n,s,i){const o=t(...r);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,n),i?a(l):a()}catch(l){u(new d(`Output from '${t.name}' did not produce expected output with input: ${h(r)}: ${Oe(l)}`,s))}});try{return e(o,n),i?o:void 0}catch(a){throw new d(`Output from '${t.name}' did not produce expected output with input: ${h(r)}: ${Oe(a)}`,s)}}function lg(e,t,r,n,s){try{const i=Qn(...li(e,t,r,n,s),!1);return i instanceof Promise?new Promise(async o=>{try{await i,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function cg(e,t,r,n,s){return Qn(...li(e,t,r,n,s),!0)}function fg(e,t,r,n,s){try{const i=Qn(...li(e,t,r,n,s),!0);return i instanceof Promise?new Promise(async o=>{try{o(await i)}catch{o(void 0)}}):i}catch{return}}const Ji=Symbol("not set");async function dg(e,t,r,n,s,i){const o=Array.isArray(r),a=o?e:id,u=o?t:e,l=o?r:t,c=o?n:r,f=Yf(o?s:n),m=o?i:s,p=zr(f.timeout,{milliseconds:!0}).milliseconds,y=zr(f.interval,{milliseconds:!0});let w=Ji,A;async function D(){try{w=await Qn(a,u,l,c,void 0,!0)}catch(M){w=Ji,A=et(M)}}const S=Date.now();for(;w===Ji;)if(await D(),await Pn(y),Date.now()-S>=p)throw ni(A,ri(m,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return w}const hg={output:ug},pd={assert:hg,check:{output:lg},assertWrap:{output:cg},checkWrap:{output:fg},waitUntil:{output:dg}},mn={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new d(`'${h(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new d(`'${h(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new d(`'${h(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new d(`'${h(e)}' is not a Primitive.`,t)}},gd={assert:mn,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new d(`'${h(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new d(`'${h(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new d(`'${h(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new d(`'${h(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:$(mn.isNotPrimitive),isNotPropertyKey:$(mn.isNotPropertyKey),isPrimitive:$(mn.isPrimitive),isPropertyKey:$(mn.isPropertyKey)}},pn={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new d(`'${h(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new d(`'${h(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new d(`'${h(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new d(`'${h(e)}' is a Promise.`,t)}},yd={assert:pn,check:{isPromiseLike(e){return!!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new d(`'${h(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new d(`'${h(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new d(`'${h(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new d(`'${h(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:$(pn.isPromiseLike,!0),isNotPromiseLike:$(pn.isNotPromiseLike,!0),isPromise:$(pn.isPromise,!0),isNotPromise:$(pn.isNotPromise,!0)}},Hi={matches(e,t,r){if(!t.test(e))throw new d(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new d(`'${e}' matches ${t}`,r)}},wd={assert:Hi,check:{matches(e,t){return!!t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new d(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new d(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:$(Hi.matches,!0),mismatches:$(Hi.mismatches,!0)}},fe={isArray(e,t){if(!Array.isArray(e))throw new d(`'${h(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new d(`'${h(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new d(`'${h(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new d(`'${h(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new d(`'${h(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new d(`'${h(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new d(`'${h(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new d(`'${h(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new d(`'${h(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new d(`'${h(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new d(`'${h(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new d(`'${h(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new d(`'${h(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new d(`'${h(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new d(`'${h(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new d(`'${h(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new d(`'${h(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new d(`'${h(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new d(`'${h(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new d(`'${h(e)}' is a undefined.`,t)}},vd={assert:fe,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new d(`'${h(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new d(`'${h(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new d(`'${h(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new d(`'${h(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new d(`'${h(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new d(`'${h(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new d(`'${h(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new d(`'${h(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new d(`'${h(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new d(`'${h(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new d(`'${h(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new d(`'${h(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new d(`'${h(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new d(`'${h(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new d(`'${h(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new d(`'${h(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new d(`'${h(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new d(`'${h(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new d(`'${h(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new d(`'${h(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:$(fe.isArray),isBigInt:$(fe.isBigInt),isBoolean:$(fe.isBoolean),isFunction:$(fe.isFunction),isNull:$(fe.isNull),isNumber:$(fe.isNumber),isObject:$(fe.isObject),isString:$(fe.isString),isSymbol:$(fe.isSymbol),isUndefined:$(fe.isUndefined),isNotArray:$(fe.isNotArray),isNotBigInt:$(fe.isNotBigInt),isNotBoolean:$(fe.isNotBoolean),isNotFunction:$(fe.isNotFunction),isNotNull:$(fe.isNotNull),isNotNumber:$(fe.isNotNumber),isNotObject:$(fe.isNotObject),isNotString:$(fe.isNotString),isNotSymbol:$(fe.isNotSymbol),isNotUndefined:$(fe.isNotUndefined)}};var Re;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Re||(Re={}));function pa(e,t,r){ga(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,r)}function Zu(e,t,r){ga(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${h(e)}' is not an error instance.`},t,r)}function ga(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const s=e.constructor.name;throw new d(`Error constructor '${s}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const s=Oe(e);if(typeof r.matchMessage=="string"){if(!s.includes(r.matchMessage))throw new d(`Error message

'${s}'

does not contain

'${r.matchMessage}'.`,n)}else if(!s.match(r.matchMessage))throw new d(`Error message

'${s}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new d(t.notInstance,n);else throw new d(t.noError,n)}function Yu(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=Oe(e);if(typeof t.matchMessage=="string"){if(!r.includes(t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function ci(e,t,r,n){let s;try{const i=t instanceof Promise?t:t();if(i instanceof Promise)return new Promise(async(o,a)=>{try{await i}catch(u){s=et(u)}try{Zu(s,r,n),e===Re.Assert?o():e===Re.Check?o(!0):o(s)}catch(u){e===Re.CheckWrap?o(void 0):e===Re.Check?o(!1):a(et(u))}})}catch(i){s=et(i)}try{return Zu(s,r,n),e===Re.Check?!0:e!==Re.Assert?s:void 0}catch(i){if(e===Re.CheckWrap)return;if(e===Re.Check)return!1;throw i}}function mg(e,t,r){return ci(Re.Assert,e,t,r)}function pg(e,t){return ci(Re.Check,e,t)}function gg(e,t,r){return ci(Re.AssertWrap,e,t,r)}function yg(e,t,r){return ci(Re.CheckWrap,e,t,r)}const wg=$(pa);function vg(e,t,r,n){const s=typeof e=="function"||e instanceof Promise?void 0:e,i=s?t:e,o=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof i!="function")throw new TypeError(`Callback is not a function, got '${h(i)}'`);return wg(s,async()=>{try{await i();return}catch(u){return et(u)}},a,o)}const bg={throws:mg,isError:pa},bd={assert:bg,check:{throws:pg,isError(e,t){return Yu(e,t)}},assertWrap:{throws:gg,isError(e,t,r){return ga(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:yg,isError(e,t){if(Yu(e,t))return e}},waitUntil:{throws:vg,isError:$(pa)}},Zt=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Qi={isUuid(e,t){if(!String(e).match(Zt))throw new d(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Zt))throw new d(`'${String(e)}' is a UUID.`,t)}},Dd={assert:Qi,check:{isUuid(e){return!!String(e).match(Zt)},isNotUuid(e){return!String(e).match(Zt)}},assertWrap:{isUuid(e,t){if(!String(e).match(Zt))throw new d(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Zt))throw new d(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Zt))return e},isNotUuid(e){if(!String(e).match(Zt))return e}},waitUntil:{isUuid:$(Qi.isUuid),isNotUuid:$(Qi.isNotUuid)}},Dg={...dd.assert,...Jf.assert,...Hf.assert,...Xf.assert,...Qf.assert,...ud.assert,...ld.assert,...ed.assert,...cd.assert,...fd.assert,...hd.assert,...md.assert,...pd.assert,...gd.assert,...yd.assert,...wd.assert,...vd.assert,...od.assert,...bd.assert,...Dd.assert,...ad.assert},ya=[Jf,Hf,Xf,Qf,ud,ld,ed,cd,fd,dd,hd,md,pd,gd,yd,wd,vd,od,bd,Dd,ad],Eg=Object.assign({},...ya.map(e=>e.check)),E=Object.assign(function(t){return!!t},Eg);function Ag(e,t,r){return Ns(e,t,r,new Set)}function Ns(e,t,r,n){if(e=Ju(e),t=Ju(t),E.isObject(e)&&E.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Ns(Q(e).sort(),Q(t).sort(),r,n))return!1;let s=!1;const i=Q(e).map(o=>{const a=Ns(e[o],t[o],r,n);return E.isPromise(a)&&(s=!0),a});return Hu(s,i)}else if(E.isArray(e)&&E.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let s=!1;const i=e.map((o,a)=>{const u=Ns(o,t[a],r,n);return E.isPromise(u)&&(s=!0),u});return Hu(s,i)}else return r(e,t)}function Ju(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Hu(e,t){return e?new Promise(async(r,n)=>{try{const s=await Promise.all(t);r(s.every(E.isTrue))}catch(s){n(et(s))}}):t.every(E.isTrue)}const Cg=Object.assign({},...ya.map(e=>e.assertWrap)),Gr=Object.assign(function(t,r){if(!t)throw new d("Assertion failed.",r);return t},Cg);function $g(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const kg={tsType:$g},Sg={assert:kg},Fg={fail:e=>{throw new d("Failure triggered.",e)}},xg={...Sg.assert,...Dg,...Fg},ar=Object.assign(function(t,r){if(!t)throw new d("Assertion failed.",r)},xg),Tg=Object.assign({},...ya.map(e=>e.checkWrap)),Ng=Object.assign(function(t){if(t)return t},Tg);function Mg(e,t){return E.hasKey(e,"entryType")&&e.entryType===t}function xr(e,t){return e.controlType===t}var K=(e=>(e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text",e))(K||{});const Ed=Symbol("any-type"),Bg={checkbox:!1,color:"",dropdown:"",hidden:Ed,number:0,text:""};function Pg(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,s])=>{const i=Bg[s.controlType];i!==Ed&&(typeof i!=typeof s.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${s.initValue}': expected initValue of type ${typeof i} because the control is of type ${s.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Ig(e,t,r){const n=t;if(e.has(n))return e.get(n);{const s=r();return E.isPromise(s)?new Promise(async(i,o)=>{try{const a=await s;e.set(n,a),i(a)}catch(a){o(et(a))}}):(e.set(n,s),s)}}function Xn(e,t,r){if(t in e)return e[t];{const n=r();return E.isPromise(n)?new Promise(async(s,i)=>{try{const o=await n;e[t]=o,s(o)}catch(o){i(et(o))}}):(e[t]=n,n)}}function Ad(e){return Q(e).map(t=>[t,e[t]])}function Rg(e){return Object.fromEntries(e)}function Cd(e,t,r){return e.reduce((n,s,i,o)=>{const a=t(s,i,o);return r(a,s,i,o)&&n.push(a),n},[])}function Lg(e,t=r=>r){const r=new Map;return e.filter(n=>{const s=t(n);return r.get(s)?!1:(r.set(s,n),!0)})}function Og({min:e,max:t}){const{min:r,max:n}=jc({min:Math.floor(e),max:Math.floor(t)}),s=n-r+1,i=Math.ceil(Math.log2(s)),o=Math.ceil(i/8);if(o>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**o/s)*s,u=new Uint8Array(o);let l;do crypto.getRandomValues(u),l=u.reduce((c,f,m)=>c+f*256**m,0);while(l>=a);return r+l%s}const Qu=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function $d(e=16){let t="";for(let r=0;r<e;r++){const n=Og({min:0,max:Qu.length-1});t+=Qu[n]}return t}function kd(e){if(E.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Oe(t).trim()).join(`
`))}function _g(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Vg="px";function Sd(e){return Ug({value:e,suffix:Vg})}function Ug({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function dt({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Vr({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function Wg(e,...t){const r={...e};return t.forEach(n=>{n&&Ad(n).forEach(([s,i])=>{i!=null&&(r[s]=i)})}),r}function Fd(...e){const t=e.join(""),r=Lg(Array.from(t));return Array.from(r).join("")}function jg(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function xd(e,t){const r=Fd([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return qg(e,r)}function qg(e,t){const r=Fd(t);return typeof e=="string"?new RegExp(jg(e),r):new RegExp(e.source,r)}function Td(e,{caseSensitive:t}){return xd(e,"")}function zg({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const s=xd(Td(t,{caseSensitive:r}),"g"),i=[];return e.replace(s,(...o)=>{const a=o[o.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=o[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);i.push({index:a,length:u.length});const l=o[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),i}function Kg(e,t,{caseSensitive:r}){const n=zg({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),s=Td(t,{caseSensitive:r});return e.split(s).reduce((o,a,u)=>{const l=n[u],c=o.concat(a);if(l){const f=e.slice(l.index,l.index+l.length);return c.concat(f)}else return c},[])}function Gg(e,t){return e.split(t)}function Xu(e,t){const{min:r,max:n}=jc(t);return e>n?r:e<r?n:e}function Te(e,t){let r=!1;const n=Q(e).reduce((s,i)=>{const o=t(i,e[i],e);return o instanceof Promise&&(r=!0),s[i]=o,s},{});return r?new Promise(async(s,i)=>{try{await Promise.all(Q(n).map(async o=>{const a=await n[o];n[o]=a})),s(n)}catch(o){i(et(o))}}):n}function fi(e,t){const r=Ad(e).filter(([n,s])=>t(n,s,e));return Rg(r)}function Zg(e,t){return fi(e,r=>!t.includes(r))}function Yg(e,t){return fi(e,r=>t.includes(r))}function Ro(e){return Q(e).map(t=>e[t])}function Jg(e,t){return t.capitalizeFirstLetter?Hg(e):e}function Hg(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const Qg={capitalizeFirstLetter:!1};var Zr;(function(e){e.Upper="upper",e.Lower="lower"})(Zr||(Zr={}));function Xg(e){return e.toLowerCase()!==e.toUpperCase()}function el(e,t,r){if(!e&&r?.rejectNoCaseCharacters)return!1;for(const n of e)if(Xg(n)){if(t===Zr.Upper&&n!==n.toUpperCase()||t===Zr.Lower&&n!==n.toLowerCase())return!1}else{if(r?.rejectNoCaseCharacters)return!1;continue}return!0}function e1(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return Jg(n,Wg(Qg,t))}function t1(e){return e.split("").reduce((r,n,s,i)=>{const o=s>0&&i[s-1]||"",a=s<i.length-1&&i[s+1]||"",u=el(o,Zr.Lower,{rejectNoCaseCharacters:!0})||el(a,Zr.Lower,{rejectNoCaseCharacters:!0});return n===n.toLowerCase()||s===0||!u?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function r1(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function n1(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function un(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function Nd(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class s1{listeners={};universalListeners=new Map;getListenerCount(){return Ro(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function s(i,o){r.once&&n(),t(i,o)}return this.universalListeners.set(t,{listener:s,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const s=E.isString(t)?t:t.type,i=()=>this.listeners[s]?.delete(r)||!1;function o(a,u){n.once&&i(),r(a,u)}return Xn(this.listeners,s,()=>new Map).set(r,{listener:o,removeListener:i}),i}removeListener(t,r){const n=E.isString(t)?t:t.type,s=this.listeners[n];if(!s)return!1;const i=s.get(r);return i?i.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(s=>{s.listener(t,s.removeListener)}),this.universalListeners.forEach(s=>{s.listener(t,s.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=Ro(this.listeners).reduce((n,s)=>{const i=s.size||0;return s.clear(),n+i},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class wa extends s1{}function Md(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function tl(e,t,r){return Md(globalThis,e,t,r)}function va(e,t){return qs(e.title),e.parent?[...va(e.parent),qs(e.parent.title)].concat([]):[]}function qs(e){return n1(e).toLowerCase().replaceAll(/\s/g,"-")}function i1({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const o1={[Ce.ElementExample]:()=>[],[Ce.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Pg(e.controls,e.title)].filter(E.isTruthy),[Ce.Root]:()=>[]},zs="_isBookTreeNode",Bd=new Map;function a1(e){return Bd.get(e)}function u1(e,t){Ig(Bd,e,()=>t)}function Ur(e,t){return!!(Pd(e)&&e.entry.entryType===t)}function Pd(e){return!!(E.hasKeys(e,[zs,"entry"])&&e[zs])}function l1(){return{[zs]:!0,entry:{entryType:Ce.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function c1({entries:e,debug:t}){const r=a1(e);if(r)return r;const n=l1();e.forEach(o=>ba({tree:n,newEntry:o,debug:t,manuallyAdded:!0}));const s=Id(n),i={tree:n,flattenedNodes:s};return u1(e,i),t&&console.info("element-book tree:",n),i}function f1(e,t,r){if(!t.parent)return e;const n=Lo(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),ba({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const s=Lo(t,e);if(!s)throw new Error(`Failed to find node despite having just added it: ${va(t).join(" > ")}`);return s}function ba({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const s=o1[t.entryType](t);t.errors.push(...s);const i=f1(e,t,r),o=qs(t.title),a=i.children[o];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${o}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[zs]:!0,children:{},urlBreadcrumb:o,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,o],entry:t,manuallyAdded:n};i.children[o]=u,Mg(t,Ce.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>ba({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function Lo(e,t){const r=Pd(e)?e.fullUrlBreadcrumbs.slice(0,-1):va(e);return r.length?r.reduce((s,i)=>{if(s)return s.children[i]},t):void 0}function Id(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(s=>Id(s));return[e,...r].flat()}function Da(e,t){return Ea(e,["",...t],void 0)}function Ea(e,t,r){const n=t.slice(1),s=n[0];!s&&r&&(e.controls=r);const i=e.children[s||""],o=i&&Ea(i,n,r);return{...e.controls,...o}}function d1(e,t,r){const n={...e};return Ea(n,["",...t],r),n}function Rd(e,t){const r=t?.controls||(Ur(e,Ce.Page)?Te(e.entry.controls,(s,i)=>i.initValue):{});return{children:Te(e.children,(s,i)=>Rd(i,t?.children?.[i.urlBreadcrumb])),controls:r}}function tt(e){const t={...e,entryType:Ce.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const s={...n,entryType:Ce.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(E.isTruthy)};r.add(n.title),t.elementExamples[qs(s.title)]=s}}),t}var ut=(e=>(e.Search="search",e.Book="book",e))(ut||{});function Oo(e){return e[0]==="book"?"":e[1]?decodeURIComponent(e[1]):""}const Yr={hash:void 0,paths:["book"],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms=globalThis,Aa=Ms.ShadowRoot&&(Ms.ShadyCSS===void 0||Ms.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ca=Symbol(),rl=new WeakMap;let Ld=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Ca)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Aa&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=rl.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&rl.set(r,t))}return t}toString(){return this.cssText}};const he=e=>new Ld(typeof e=="string"?e:e+"",void 0,Ca),Bs=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,s,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new Ld(r,e,Ca)},h1=(e,t)=>{if(Aa)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),s=Ms.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,e.appendChild(n)}},nl=Aa?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return he(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:m1,defineProperty:p1,getOwnPropertyDescriptor:g1,getOwnPropertyNames:y1,getOwnPropertySymbols:w1,getPrototypeOf:v1}=Object,di=globalThis,sl=di.trustedTypes,b1=sl?sl.emptyScript:"",D1=di.reactiveElementPolyfillSupport,xn=(e,t)=>e,Ks={toAttribute(e,t){switch(t){case Boolean:e=e?b1:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},$a=(e,t)=>!m1(e,t),il={attribute:!0,type:String,converter:Ks,reflect:!1,useDefault:!1,hasChanged:$a};Symbol.metadata??=Symbol("metadata"),di.litPropertyMetadata??=new WeakMap;let Ir=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=il){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(t,n,r);s!==void 0&&p1(this.prototype,t,s)}}static getPropertyDescriptor(t,r,n){const{get:s,set:i}=g1(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:s,set(o){const a=s?.call(this);i?.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??il}static _$Ei(){if(this.hasOwnProperty(xn("elementProperties")))return;const t=v1(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(xn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xn("properties"))){const r=this.properties,n=[...y1(r),...w1(r)];for(const s of n)this.createProperty(s,r[s])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,s]of r)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const s=this._$Eu(r,n);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const s of n)r.unshift(nl(s))}else t!==void 0&&r.push(nl(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){const i=(n.converter?.toAttribute!==void 0?n.converter:Ks).toAttribute(r,n.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,r){const n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=n.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Ks;this._$Em=s,this[s]=o.fromAttribute(r,i.type)??this._$Ej?.get(s)??null,this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){const s=this.constructor,i=this[t];if(n??=s.getPropertyOptions(t),!((n.hasChanged??$a)(i,r)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:s,wrapped:i},o){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??r??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,i]of n){const{wrapped:o}=i,a=this[s];o!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,i,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Ir.elementStyles=[],Ir.shadowRootOptions={mode:"open"},Ir[xn("elementProperties")]=new Map,Ir[xn("finalized")]=new Map,D1?.({ReactiveElement:Ir}),(di.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ka=globalThis,Gs=ka.trustedTypes,ol=Gs?Gs.createPolicy("lit-html",{createHTML:e=>e}):void 0,Od="$lit$",Jt=`lit$${Math.random().toFixed(9).slice(2)}$`,_d="?"+Jt,E1=`<${_d}>`,Ar=document,Rn=()=>Ar.createComment(""),Ln=e=>e===null||typeof e!="object"&&typeof e!="function",Sa=Array.isArray,A1=e=>Sa(e)||typeof e?.[Symbol.iterator]=="function",Xi=`[ 	
\f\r]`,gn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,al=/-->/g,ul=/>/g,pr=RegExp(`>|${Xi}(?:([^\\s"'>=/]+)(${Xi}*=${Xi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ll=/'/g,cl=/"/g,Vd=/^(?:script|style|textarea|title)$/i,C1=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),$1=C1(1),_e=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),fl=new WeakMap,br=Ar.createTreeWalker(Ar,129);function Ud(e,t){if(!Sa(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ol!==void 0?ol.createHTML(t):t}const k1=(e,t)=>{const r=e.length-1,n=[];let s,i=t===2?"<svg>":t===3?"<math>":"",o=gn;for(let a=0;a<r;a++){const u=e[a];let l,c,f=-1,m=0;for(;m<u.length&&(o.lastIndex=m,c=o.exec(u),c!==null);)m=o.lastIndex,o===gn?c[1]==="!--"?o=al:c[1]!==void 0?o=ul:c[2]!==void 0?(Vd.test(c[2])&&(s=RegExp("</"+c[2],"g")),o=pr):c[3]!==void 0&&(o=pr):o===pr?c[0]===">"?(o=s??gn,f=-1):c[1]===void 0?f=-2:(f=o.lastIndex-c[2].length,l=c[1],o=c[3]===void 0?pr:c[3]==='"'?cl:ll):o===cl||o===ll?o=pr:o===al||o===ul?o=gn:(o=pr,s=void 0);const p=o===pr&&e[a+1].startsWith("/>")?" ":"";i+=o===gn?u+E1:f>=0?(n.push(l),u.slice(0,f)+Od+u.slice(f)+Jt+p):u+Jt+(f===-2?a:p)}return[Ud(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class On{constructor({strings:t,_$litType$:r},n){let s;this.parts=[];let i=0,o=0;const a=t.length-1,u=this.parts,[l,c]=k1(t,r);if(this.el=On.createElement(l,n),br.currentNode=this.el.content,r===2||r===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=br.nextNode())!==null&&u.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(Od)){const m=c[o++],p=s.getAttribute(f).split(Jt),y=/([.?@])?(.*)/.exec(m);u.push({type:1,index:i,name:y[2],strings:p,ctor:y[1]==="."?F1:y[1]==="?"?x1:y[1]==="@"?T1:hi}),s.removeAttribute(f)}else f.startsWith(Jt)&&(u.push({type:6,index:i}),s.removeAttribute(f));if(Vd.test(s.tagName)){const f=s.textContent.split(Jt),m=f.length-1;if(m>0){s.textContent=Gs?Gs.emptyScript:"";for(let p=0;p<m;p++)s.append(f[p],Rn()),br.nextNode(),u.push({type:2,index:++i});s.append(f[m],Rn())}}}else if(s.nodeType===8)if(s.data===_d)u.push({type:2,index:i});else{let f=-1;for(;(f=s.data.indexOf(Jt,f+1))!==-1;)u.push({type:7,index:i}),f+=Jt.length-1}i++}}static createElement(t,r){const n=Ar.createElement("template");return n.innerHTML=t,n}}function Jr(e,t,r=e,n){if(t===_e)return t;let s=n!==void 0?r._$Co?.[n]:r._$Cl;const i=Ln(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=s:r._$Cl=s),s!==void 0&&(t=Jr(e,s._$AS(e,t.values),s,n)),t}let S1=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,s=(t?.creationScope??Ar).importNode(r,!0);br.currentNode=s;let i=br.nextNode(),o=0,a=0,u=n[0];for(;u!==void 0;){if(o===u.index){let l;u.type===2?l=new ln(i,i.nextSibling,this,t):u.type===1?l=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(l=new N1(i,this,t)),this._$AV.push(l),u=n[++a]}o!==u?.index&&(i=br.nextNode(),o++)}return br.currentNode=Ar,s}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class ln{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,s){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Jr(this,t,r),Ln(t)?t===z||t==null||t===""?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==_e&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):A1(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==z&&Ln(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ar.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=On.createElement(Ud(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(r);else{const i=new S1(s,this),o=i.u(this.options);i.p(r),this.T(o),this._$AH=i}}_$AC(t){let r=fl.get(t.strings);return r===void 0&&fl.set(t.strings,r=new On(t)),r}k(t){Sa(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const i of t)s===r.length?r.push(n=new ln(this.O(Rn()),this.O(Rn()),this,this.options)):n=r[s],n._$AI(i),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class hi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,s,i){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=z}_$AI(t,r=this,n,s){const i=this.strings;let o=!1;if(i===void 0)t=Jr(this,t,r,0),o=!Ln(t)||t!==this._$AH&&t!==_e,o&&(this._$AH=t);else{const a=t;let u,l;for(t=i[0],u=0;u<i.length-1;u++)l=Jr(this,a[n+u],r,u),l===_e&&(l=this._$AH[u]),o||=!Ln(l)||l!==this._$AH[u],l===z?t=z:t!==z&&(t+=(l??"")+i[u+1]),this._$AH[u]=l}o&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class F1 extends hi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}class x1 extends hi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==z)}}class T1 extends hi{constructor(t,r,n,s,i){super(t,r,n,s,i),this.type=5}_$AI(t,r=this){if((t=Jr(this,t,r,0)??z)===_e)return;const n=this._$AH,s=t===z&&n!==z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==z&&(n===z||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class N1{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Jr(this,t)}}const M1={I:ln},B1=ka.litHtmlPolyfillSupport;B1?.(On,ln),(ka.litHtmlVersions??=[]).push("3.3.0");const P1=(e,t,r)=>{const n=r?.renderBefore??t;let s=n._$litPart$;if(s===void 0){const i=r?.renderBefore??null;n._$litPart$=s=new ln(t.insertBefore(Rn(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fa=globalThis;let Tn=class extends Ir{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=P1(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _e}};Tn._$litElement$=!0,Tn.finalized=!0,Fa.litElementHydrateSupport?.({LitElement:Tn});const I1=Fa.litElementPolyfillSupport;I1?.({LitElement:Tn});(Fa.litElementVersions??=[]).push("4.2.0");function ur(e){if(E.isObject(e))return Te(e,(r,n)=>{if(!E.isString(r))throw new TypeError(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(t1(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,o=r.startsWith("--")?he(r):r.startsWith("-")?Bs`-${he(r)}`:Bs`--${he(r)}`;return{name:o,value:Bs`var(${o}, ${he(i)})`,default:String(i)}});throw new TypeError(`Invalid setup input for '${ur.name}' function.`)}function R1({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}const Z=ur({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),L1={nav:{hover:{background:Z["element-book-nav-hover-background-color"],foreground:Z["element-book-nav-hover-foreground-color"]},active:{background:Z["element-book-nav-active-background-color"],foreground:Z["element-book-nav-active-foreground-color"]},selected:{background:Z["element-book-nav-selected-background-color"],foreground:Z["element-book-nav-selected-foreground-color"]}},accent:{icon:Z["element-book-accent-icon-color"]},page:{background:Z["element-book-page-background-color"],backgroundFaint1:Z["element-book-page-background-faint-level-1-color"],backgroundFaint2:Z["element-book-page-background-faint-level-2-color"],foreground:Z["element-book-page-foreground-color"],foregroundFaint1:Z["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Z["element-book-page-foreground-faint-level-2-color"]}};function O1(e,t){Wd(e,t,L1)}function _o(e){return E.hasKey(e,"_$cssResult$")}function dl(e){return E.hasKeys(e,["name","value","default"])&&E.isString(e.default)&&_o(e.name)&&_o(e.value)}function Wd(e,t,r){Object.entries(t).forEach(([n,s])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(_o(s)){if(!dl(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);R1({forCssVar:i,onElement:e,toValue:String(s)})}else{if(dl(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Wd(e,s,i)}})}function oe(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(o=>[o]));let n=t[0].length,s=t[0].map((o,a)=>t.map(u=>u[a])),i=e.map(o=>s.map(a=>{let u=0;if(!Array.isArray(o)){for(let l of a)u+=o*l;return u}for(let l=0;l<o.length;l++)u+=o[l]*(a[l]||0);return u}));return r===1&&(i=i[0]),n===1?i.map(o=>o[0]):i}function es(e){return er(e)==="string"}function er(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Zs(e,{precision:t,unit:r}){return rr(e)?"none":jd(e,t)+(r??"")}function rr(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function pe(e){return rr(e)?0:e}function jd(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const s=10**(t-n);return Math.floor(e*s+.5)/s}const _1={deg:1,grad:.9,rad:180/Math.PI,turn:360};function qd(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,s=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let i=e.match(t);if(i){let o=[];return i[2].replace(s,(a,u)=>{let l=u.match(n),c=u;if(l){let f=l[0],m=c.slice(0,-f.length);f==="%"?(c=new Number(m/100),c.type="<percentage>"):(c=new Number(m*_1[f]),c.type="<angle>",c.unit=f)}else r.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);a.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=u),o.push(c)}),{name:i[1].toLowerCase(),rawName:i[1],rawArgs:i[2],args:o}}}function zd(e){return e[e.length-1]}function _n(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Kd(e,t,r){return(r-e)/(t-e)}function xa(e,t,r){return _n(t[0],t[1],Kd(e[0],e[1],r))}function Gd(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let s=new String(n[1]);return s.range=[+n[2],+n[3]],s}return r}))}function Zd(e,t,r){return Math.max(Math.min(r,t),e)}function mi(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function yt(e,t){return mi(Math.abs(e)**t,e)}function Ta(e,t){return t===0?0:e/t}function Yd(e,t,r=0,n=e.length){for(;r<n;){const s=r+n>>1;e[s]<t?r=s+1:n=s}return r}var V1=Object.freeze({__proto__:null,bisectLeft:Yd,clamp:Zd,copySign:mi,interpolate:_n,interpolateInv:Kd,isNone:rr,isString:es,last:zd,mapRange:xa,multiplyMatrices:oe,parseCoordGrammar:Gd,parseFunction:qd,serializeNumber:Zs,skipNone:pe,spow:yt,toPrecision:jd,type:er,zdiv:Ta});class U1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(s){this[s]=this[s]||[],r&&this[s][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const nr=new U1;var Ze={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const xe={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Vo(e){return Array.isArray(e)?e:xe[e]}function Ys(e,t,r,n={}){if(e=Vo(e),t=Vo(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let s={W1:e,W2:t,XYZ:r,options:n};if(nr.run("chromatic-adaptation-start",s),s.M||(s.W1===xe.D65&&s.W2===xe.D50?s.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:s.W1===xe.D50&&s.W2===xe.D65&&(s.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),nr.run("chromatic-adaptation-end",s),s.M)return oe(s.M,s.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const W1=new Set(["<number>","<percentage>","<angle>"]);function hl(e,t,r,n){return Object.entries(e.coords).map(([i,o],a)=>{let u=t.coordGrammar[a],l=n[a],c=l?.type,f;if(l.none?f=u.find(y=>W1.has(y)):f=u.find(y=>y==c),!f){let y=o.name||i;throw new TypeError(`${c??l.raw} not allowed for ${y} in ${r}()`)}let m=f.range;c==="<percentage>"&&(m||=[0,1]);let p=o.range||o.refRange;return m&&p&&(n[a]=xa(m,p,n[a])),f})}function Jd(e,{meta:t}={}){let r={str:String(e)?.trim()};if(nr.run("parse-start",r),r.color)return r.color;if(r.parsed=qd(r.str),r.parsed){let n=r.parsed.name;if(n==="color"){let s=r.parsed.args.shift(),i=s.startsWith("--")?s.substring(2):`--${s}`,o=[s,i],a=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let c of T.all){let f=c.getFormat("color");if(f&&(o.includes(f.id)||f.ids?.filter(m=>o.includes(m)).length)){const m=Object.keys(c.coords).map((y,w)=>r.parsed.args[w]||0);let p;return f.coordGrammar&&(p=hl(c,f,"color",m)),t&&Object.assign(t,{formatId:"color",types:p}),f.id.startsWith("--")&&!s.startsWith("--")&&Ze.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${f.id}) instead of color(${s}).`),s.startsWith("--")&&!f.id.startsWith("--")&&Ze.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${f.id}) instead of prefixed color(${s}).`),{spaceId:c.id,coords:m,alpha:a}}}let u="",l=s in T.registry?s:i;if(l in T.registry){let c=T.registry[l].formats?.color?.id;c&&(u=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${s}). `+(u||"Missing a plugin?"))}else for(let s of T.all){let i=s.getFormat(n);if(i&&i.type==="function"){let o=1;(i.lastAlpha||zd(r.parsed.args).alpha)&&(o=r.parsed.args.pop());let a=r.parsed.args,u;return i.coordGrammar&&(u=hl(s,i,n,a)),t&&Object.assign(t,{formatId:i.name,types:u}),{spaceId:s.id,coords:a,alpha:o}}}}else for(let n of T.all)for(let s in n.formats){let i=n.formats[s];if(i.type!=="custom"||i.test&&!i.test(r.str))continue;let o=i.parse(r.str);if(o)return o.alpha??=1,t&&(t.formatId=s),o}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function V(e){if(Array.isArray(e))return e.map(V);if(!e)throw new TypeError("Empty color reference");es(e)&&(e=Jd(e));let t=e.space||e.spaceId;return t instanceof T||(e.space=T.get(t)),e.alpha===void 0&&(e.alpha=1),e}const j1=75e-6;class T{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?T.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Vo(n),this.formats=t.formats??{};for(let s in this.formats){let i=this.formats[s];i.type||="function",i.name||=s}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:T.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(s,i)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:q1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),nr.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=j1}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((s,i)=>{let o=n[i];if(o.type!=="angle"&&o.range){if(Number.isNaN(s))return!0;let[a,u]=o.range;return(a===void 0||s>=a-r)&&(u===void 0||s<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=ml(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=ml(r,this),r):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=V(t);[t,r]=[a.space,a.coords]}if(t=T.get(t),this.equals(t))return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=this.path,s=t.path,i,o;for(let a=0;a<n.length&&n[a].equals(s[a]);a++)i=n[a],o=a;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>o;a--)r=n[a].toBase(r);for(let a=o+1;a<s.length;a++)r=s[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=V(t);[t,r]=[n.space,n.coords]}return t=T.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],s=n.range||n.refRange;t.push(s?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(T.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof T)return t;if(er(t)==="string"){let s=T.registry[t.toLowerCase()];if(!s)throw new TypeError(`No color space found with id = "${t}"`);return s}if(r.length)return T.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){let n=er(t),s,i;if(n==="string"?t.includes(".")?[s,i]=t.split("."):[s,i]=[,t]:Array.isArray(t)?[s,i]=t:(s=t.space,i=t.coordId),s=T.get(s),s||(s=r),!s)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=er(i),n==="number"||n==="string"&&i>=0){let u=Object.entries(s.coords)[i];if(u)return{space:s,id:u[0],index:i,...u[1]}}s=T.get(s);let o=i.toLowerCase(),a=0;for(let u in s.coords){let l=s.coords[u];if(u.toLowerCase()===o||l.name?.toLowerCase()===o)return{space:s,id:u,index:a,...l};a++}throw new TypeError(`No "${i}" coordinate found in ${s.name}. Its coordinates are: ${Object.keys(s.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function q1(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function ml(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=Gd(e.coords);let r=Object.entries(t).map(([n,s],i)=>{let o=e.coordGrammar[i][0],a=s.range||s.refRange,u=o.range,l="";return o=="<percentage>"?(u=[0,100],l="%"):o=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(n,s)=>n.map((i,o)=>{let{fromRange:a,toRange:u,suffix:l}=r[o];return a&&u&&(i=xa(a,u,i)),i=Zs(i,{precision:s,unit:l}),i})}return e}var be=new T({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Ve extends T{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=be),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=oe(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Ys(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=Ys(this.base.white,this.white,r),oe(t.fromXYZ_M,r))),t.referred??="display",super(t)}}function ts(e,t){return e=V(e),!t||e.space.equals(t)?e.coords.slice():(t=T.get(t),t.from(e))}function ze(e,t){e=V(e);let{space:r,index:n}=T.resolveCoord(t,e.space);return ts(e,r)[n]}function Na(e,t,r){return e=V(e),t=T.get(t),e.coords=t.to(e.space,r),e}Na.returns="color";function _t(e,t,r){if(e=V(e),arguments.length===2&&er(arguments[1])==="object"){let n=arguments[1];for(let s in n)_t(e,s,n[s])}else{typeof r=="function"&&(r=r(ze(e,t)));let{space:n,index:s}=T.resolveCoord(t,e.space),i=ts(e,n);i[s]=r,Na(e,n,i)}return e}_t.returns="color";var Ma=new T({id:"xyz-d50",name:"XYZ D50",white:"D50",base:be,fromBase:e=>Ys(be.white,"D50",e),toBase:e=>Ys("D50",be.white,e)});const z1=216/24389,pl=24/116,ps=24389/27;let eo=xe.D50;var Ke=new T({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:eo,base:Ma,fromBase(e){let r=e.map((n,s)=>n/eo[s]).map(n=>n>z1?Math.cbrt(n):(ps*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>pl?Math.pow(t[0],3):(116*t[0]-16)/ps,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ps,t[2]>pl?Math.pow(t[2],3):(116*t[2]-16)/ps].map((n,s)=>n*eo[s])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function vt(e){return(e%360+360)%360}function K1(e,t){if(e==="raw")return t;let[r,n]=t.map(vt),s=n-r;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(r+=360):e==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):e==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var Vn=new T({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ke,fromBase(e){let[t,r,n]=e,s;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),vt(s)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const gl=25**7,Js=Math.PI,yl=180/Js,Tr=Js/180;function wl(e){const t=e*e;return t*t*t*e}function Hd(e,t,{kL:r=1,kC:n=1,kH:s=1}={}){[e,t]=V([e,t]);let[i,o,a]=Ke.from(e),u=Vn.from(Ke,[i,o,a])[1],[l,c,f]=Ke.from(t),m=Vn.from(Ke,[l,c,f])[1];u<0&&(u=0),m<0&&(m=0);let p=(u+m)/2,y=wl(p),w=.5*(1-Math.sqrt(y/(y+gl))),A=(1+w)*o,D=(1+w)*c,S=Math.sqrt(A**2+a**2),M=Math.sqrt(D**2+f**2),L=A===0&&a===0?0:Math.atan2(a,A),q=D===0&&f===0?0:Math.atan2(f,D);L<0&&(L+=2*Js),q<0&&(q+=2*Js),L*=yl,q*=yl;let $e=l-i,st=M-S,Ne=q-L,Ue=L+q,gt=Math.abs(Ne),Et;S*M===0?Et=0:gt<=180?Et=Ne:Ne>180?Et=Ne-360:Ne<-180?Et=Ne+360:Ze.warn("the unthinkable has happened");let os=2*Math.sqrt(M*S)*Math.sin(Et*Tr/2),A0=(i+l)/2,Ti=(S+M)/2,Qa=wl(Ti),At;S*M===0?At=Ue:gt<=180?At=Ue/2:Ue<360?At=(Ue+360)/2:At=(Ue-360)/2;let Xa=(A0-50)**2,C0=1+.015*Xa/Math.sqrt(20+Xa),eu=1+.045*Ti,cn=1;cn-=.17*Math.cos((At-30)*Tr),cn+=.24*Math.cos(2*At*Tr),cn+=.32*Math.cos((3*At+6)*Tr),cn-=.2*Math.cos((4*At-63)*Tr);let tu=1+.015*Ti*cn,$0=30*Math.exp(-1*((At-275)/25)**2),k0=2*Math.sqrt(Qa/(Qa+gl)),S0=-1*Math.sin(2*$0*Tr)*k0,as=($e/(r*C0))**2;return as+=(st/(n*eu))**2,as+=(os/(s*tu))**2,as+=S0*(st/(n*eu))*(os/(s*tu)),Math.sqrt(as)}const G1=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Z1=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Y1=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],J1=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Hr=new T({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:be,fromBase(e){let r=oe(G1,e).map(n=>Math.cbrt(n));return oe(Y1,r)},toBase(e){let r=oe(J1,e).map(n=>n**3);return oe(Z1,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Uo(e,t){[e,t]=V([e,t]);let[r,n,s]=Hr.from(e),[i,o,a]=Hr.from(t),u=r-i,l=n-o,c=s-a;return Math.sqrt(u**2+l**2+c**2)}const H1=75e-6;function Er(e,t,{epsilon:r=H1}={}){e=V(e),t||(t=e.space),t=T.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Qr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Qd(e,t,r="lab"){r=T.get(r);let n=r.from(e),s=r.from(t);return Math.sqrt(n.reduce((i,o,a)=>{let u=s[a];return isNaN(o)||isNaN(u)?i:i+(u-o)**2},0))}function Q1(e,t){return Qd(e,t,"lab")}const X1=Math.PI,vl=X1/180;function ey(e,t,{l:r=2,c:n=1}={}){[e,t]=V([e,t]);let[s,i,o]=Ke.from(e),[,a,u]=Vn.from(Ke,[s,i,o]),[l,c,f]=Ke.from(t),m=Vn.from(Ke,[l,c,f])[1];a<0&&(a=0),m<0&&(m=0);let p=s-l,y=a-m,w=i-c,A=o-f,D=w**2+A**2-y**2,S=.511;s>=16&&(S=.040975*s/(1+.01765*s));let M=.0638*a/(1+.0131*a)+.638,L;Number.isNaN(u)&&(u=0),u>=164&&u<=345?L=.56+Math.abs(.2*Math.cos((u+168)*vl)):L=.36+Math.abs(.4*Math.cos((u+35)*vl));let q=Math.pow(a,4),$e=Math.sqrt(q/(q+1900)),st=M*($e*L+1-$e),Ne=(p/(r*S))**2;return Ne+=(y/(n*M))**2,Ne+=D/st**2,Math.sqrt(Ne)}const bl=203;var Ba=new T({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:be,fromBase(e){return e.map(t=>Math.max(t*bl,0))},toBase(e){return e.map(t=>Math.max(t/bl,0))}});const gs=1.15,ys=.66,Dl=2610/2**14,ty=2**14/2610,El=3424/2**12,Al=2413/2**7,Cl=2392/2**7,ry=1.7*2523/2**5,$l=2**5/(1.7*2523),ws=-.56,to=16295499532821565e-27,ny=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],sy=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],iy=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],oy=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Xd=new T({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Ba,fromBase(e){let[t,r,n]=e,s=gs*t-(gs-1)*n,i=ys*r-(ys-1)*t,a=oe(ny,[s,i,n]).map(function(m){let p=El+Al*(m/1e4)**Dl,y=1+Cl*(m/1e4)**Dl;return(p/y)**ry}),[u,l,c]=oe(iy,a);return[(1+ws)*u/(1+ws*u)-to,l,c]},toBase(e){let[t,r,n]=e,s=(t+to)/(1+ws-ws*(t+to)),o=oe(oy,[s,r,n]).map(function(m){let p=El-m**$l,y=Cl*m**$l-Al;return 1e4*(p/y)**ty}),[a,u,l]=oe(sy,o),c=(a+(gs-1)*l)/gs,f=(u+(ys-1)*c)/ys;return[c,f,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Wo=new T({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Xd,fromBase(e){let[t,r,n]=e,s;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),vt(s)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function ay(e,t){[e,t]=V([e,t]);let[r,n,s]=Wo.from(e),[i,o,a]=Wo.from(t),u=r-i,l=n-o;Number.isNaN(s)&&Number.isNaN(a)?(s=0,a=0):Number.isNaN(s)?s=a:Number.isNaN(a)&&(a=s);let c=s-a,f=2*Math.sqrt(n*o)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+f**2)}const eh=3424/4096,th=2413/128,rh=2392/128,kl=2610/16384,uy=2523/32,ly=16384/2610,Sl=32/2523,cy=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],fy=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],dy=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],hy=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var jo=new T({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ba,fromBase(e){let t=oe(cy,e);return my(t)},toBase(e){let t=py(e);return oe(hy,t)}});function my(e){let t=e.map(function(r){let n=eh+th*(r/1e4)**kl,s=1+rh*(r/1e4)**kl;return(n/s)**uy});return oe(fy,t)}function py(e){return oe(dy,e).map(function(n){let s=Math.max(n**Sl-eh,0),i=th-rh*n**Sl;return 1e4*(s/i)**ly})}function gy(e,t){[e,t]=V([e,t]);let[r,n,s]=jo.from(e),[i,o,a]=jo.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-o)**2+(s-a)**2)}const yy=xe.D65,nh=.42,Fl=1/nh,ro=2*Math.PI,sh=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],wy=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],vy=[[460,451,288],[460,-891,-261],[460,-220,-6300]],by={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},wr={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Dy=180/Math.PI,xl=Math.PI/180;function ih(e,t){return e.map(n=>{const s=yt(t*Math.abs(n)*.01,nh);return 400*mi(s,n)/(s+27.13)})}function Ey(e,t){const r=100/t*27.13**Fl;return e.map(n=>{const s=Math.abs(n);return mi(r*yt(s/(400-s),Fl),n)})}function Ay(e){let t=vt(e);t<=wr.h[0]&&(t+=360);const r=Yd(wr.h,t)-1,[n,s]=wr.h.slice(r,r+2),[i,o]=wr.e.slice(r,r+2),a=wr.H[r],u=(t-n)/i;return a+100*u/(u+(s-t)/o)}function Cy(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,s]=wr.h.slice(r,r+2),[i,o]=wr.e.slice(r,r+2);return vt((t*(o*n-i*s)-100*n*o)/(t*(o-i)-100*o))}function oh(e,t,r,n,s){const i={};i.discounting=s,i.refWhite=e,i.surround=n;const o=e.map(w=>w*100);i.la=t,i.yb=r;const a=o[1],u=oe(sh,o);n=by[i.surround];const l=n[0];i.c=n[1],i.nc=n[2];const f=(1/(5*i.la+1))**4;i.fl=f*i.la+.1*(1-f)*(1-f)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/a,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const m=Math.max(Math.min(l*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=u.map(w=>_n(1,a/w,m)),i.dRgbInv=i.dRgb.map(w=>1/w);const p=u.map((w,A)=>w*i.dRgb[A]),y=ih(p,i.fl);return i.aW=i.nbb*(2*y[0]+y[1]+.05*y[2]),i}const Tl=oh(yy,64/Math.PI*.2,20,"average",!1);function qo(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=vt(e.h)*xl:r=Cy(e.H)*xl;const n=Math.cos(r),s=Math.sin(r);let i=0;e.J!==void 0?i=yt(e.J,1/2)*.1:e.Q!==void 0&&(i=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let o=0;e.C!==void 0?o=e.C/i:e.M!==void 0?o=e.M/t.flRoot/i:e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c);const a=yt(o*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*yt(i,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,f=l/t.nbb,m=23*(f+.305)*Ta(a,23*c+a*(11*n+108*s)),p=m*n,y=m*s,w=Ey(oe(vy,[f,p,y]).map(A=>A*1/1403),t.fl);return oe(wy,w.map((A,D)=>A*t.dRgbInv[D])).map(A=>A/100)}function ah(e,t){const r=e.map(M=>M*100),n=ih(oe(sh,r).map((M,L)=>M*t.dRgb[L]),t.fl),s=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,o=(Math.atan2(i,s)%ro+ro)%ro,a=.25*(Math.cos(o+2)+3.8),u=5e4/13*t.nc*t.ncb*Ta(a*Math.sqrt(s**2+i**2),n[0]+n[1]+1.05*n[2]+.305),l=yt(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*n[0]+n[1]+.05*n[2]),f=yt(c/t.aW,.5*t.c*t.z),m=100*yt(f,2),p=4/t.c*f*(t.aW+4)*t.flRoot,y=l*f,w=y*t.flRoot,A=vt(o*Dy),D=Ay(A),S=50*yt(t.c*l/(t.aW+4),1/2);return{J:m,C:y,h:A,s:S,Q:p,M:w,H:D}}var $y=new T({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:be,fromBase(e){const t=ah(e,Tl);return[t.J,t.M,t.h]},toBase(e){return qo({J:e[0],M:e[1],h:e[2]},Tl)}});const ky=xe.D65,Sy=216/24389,uh=24389/27;function Fy(e){return 116*(e>Sy?Math.cbrt(e):(uh*e+16)/116)-16}function zo(e){return e>8?Math.pow((e+16)/116,3):e/uh}function xy(e,t){let[r,n,s]=e,i=[],o=0;if(s===0)return[0,0,0];let a=zo(s);s>0?o=.00379058511492914*s**2+.608983189401032*s+.9155088574762233:o=9514440756550361e-21*s**2+.08693057439788597*s-21.928975842194614;const u=2e-12,l=15;let c=0,f=1/0;for(;c<=l;){i=qo({J:o,C:n,h:r},t);const m=Math.abs(i[1]-a);if(m<f){if(m<=u)return i;f=m}o=o-(i[1]-a)*o/(2*i[1]),c+=1}return qo({J:o,C:n,h:r},t)}function Ty(e,t){const r=Fy(e[1]);if(r===0)return[0,0,0];const n=ah(e,Pa);return[vt(n.h),n.C,r]}const Pa=oh(ky,200/Math.PI*zo(50),zo(50)*100,"average",!1);var Un=new T({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:be,fromBase(e){return Ty(e)},toBase(e){return xy(e,Pa)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Ny=Math.PI/180,Nl=[1,.007,.0228];function Ml(e){e[1]<0&&(e=Un.fromBase(Un.toBase(e)));const t=Math.log(Math.max(1+Nl[2]*e[1]*Pa.flRoot,1))/Nl[2],r=e[0]*Ny,n=t*Math.cos(r),s=t*Math.sin(r);return[e[2],n,s]}function My(e,t){[e,t]=V([e,t]);let[r,n,s]=Ml(Un.from(e)),[i,o,a]=Ml(Un.from(t));return Math.sqrt((r-i)**2+(n-o)**2+(s-a)**2)}var Xr={deltaE76:Q1,deltaECMC:ey,deltaE2000:Hd,deltaEJz:ay,deltaEITP:gy,deltaEOK:Uo,deltaEHCT:My};function By(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Bl={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function sr(e,{method:t=Ze.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:s=2,blackWhiteClamp:i={}}={}){if(e=V(e),es(arguments[1])?r=arguments[1]:r||(r=e.space),r=T.get(r),Er(e,r,{epsilon:0}))return e;let o;if(t==="css")o=Py(e,{space:r});else{if(t!=="clip"&&!Er(e,r)){Object.prototype.hasOwnProperty.call(Bl,t)&&({method:t,jnd:s,deltaEMethod:n,blackWhiteClamp:i}=Bl[t]);let a=Hd;if(n!==""){for(let l in Xr)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=Xr[l];break}}let u=sr(ie(e,r),{method:"clip",space:r});if(a(e,u)>s){if(Object.keys(i).length===3){let S=T.resolveCoord(i.channel),M=ze(ie(e,S.space),S.id);if(rr(M)&&(M=0),M>=i.max)return ie({space:"xyz-d65",coords:xe.D65},e.space);if(M<=i.min)return ie({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=T.resolveCoord(t),c=l.space,f=l.id,m=ie(e,c);m.coords.forEach((S,M)=>{rr(S)&&(m.coords[M]=0)});let y=(l.range||l.refRange)[0],w=By(s),A=y,D=ze(m,f);for(;D-A>w;){let S=Qr(m);S=sr(S,{space:r,method:"clip"}),a(m,S)-s<w?A=ze(m,f):D=ze(m,f),_t(m,f,(A+D)/2)}o=ie(m,r)}else o=u}else o=ie(e,r);if(t==="clip"||!Er(o,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);o.coords=o.coords.map((u,l)=>{let[c,f]=a[l];return c!==void 0&&(u=Math.max(c,u)),f!==void 0&&(u=Math.min(u,f)),u})}}return r!==e.space&&(o=ie(o,e.space)),e.coords=o.coords,e}sr.returns="color";const Pl={WHITE:{space:Hr,coords:[1,0,0]},BLACK:{space:Hr,coords:[0,0,0]}};function Py(e,{space:t}={}){e=V(e),t||(t=e.space),t=T.get(t);const s=T.get("oklch");if(t.isUnbounded)return ie(e,t);const i=ie(e,s);let o=i.coords[0];if(o>=1){const y=ie(Pl.WHITE,t);return y.alpha=e.alpha,ie(y,t)}if(o<=0){const y=ie(Pl.BLACK,t);return y.alpha=e.alpha,ie(y,t)}if(Er(i,t,{epsilon:0}))return ie(i,t);function a(y){const w=ie(y,t),A=Object.values(t.coords);return w.coords=w.coords.map((D,S)=>{if("range"in A[S]){const[M,L]=A[S].range;return Zd(M,D,L)}return D}),w}let u=0,l=i.coords[1],c=!0,f=Qr(i),m=a(f),p=Uo(m,f);if(p<.02)return m;for(;l-u>1e-4;){const y=(u+l)/2;if(f.coords[1]=y,c&&Er(f,t,{epsilon:0}))u=y;else if(m=a(f),p=Uo(m,f),p<.02){if(.02-p<1e-4)break;c=!1,u=y}else l=y}return m}function ie(e,t,{inGamut:r}={}){e=V(e),t=T.get(t);let n=t.from(e),s={space:t,coords:n,alpha:e.alpha};return r&&(s=sr(s,r===!0?void 0:r)),s}ie.returns="color";function Nn(e,{precision:t=Ze.precision,format:r="default",inGamut:n=!0,...s}={}){let i;e=V(e);let o=r;r=e.space.getFormat(r)??e.space.getFormat("default")??T.DEFAULT_FORMAT;let a=e.coords.slice();if(n||=r.toGamut,n&&!Er(e)&&(a=sr(Qr(e),n===!0?void 0:n).coords),r.type==="custom")if(s.precision=t,r.serialize)i=r.serialize(a,e.alpha,s);else throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);else{let u=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,t):t!==null&&(a=a.map(m=>Zs(m,{precision:t})));let l=[...a];if(u==="color"){let m=r.id||r.ids?.[0]||e.space.id;l.unshift(m)}let c=e.alpha;t!==null&&(c=Zs(c,{precision:t}));let f=e.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${c}`;i=`${u}(${l.join(r.commas?", ":" ")}${f})`}return i}const Iy=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Ry=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var pi=new Ve({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Iy,fromXYZ_M:Ry});const vs=1.09929682680944,Il=.018053968510807;var lh=new Ve({id:"rec2020",name:"REC.2020",base:pi,toBase(e){return e.map(function(t){return t<Il*4.5?t/4.5:Math.pow((t+vs-1)/vs,1/.45)})},fromBase(e){return e.map(function(t){return t>=Il?vs*Math.pow(t,.45)-(vs-1):4.5*t})}});const Ly=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Oy=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ch=new Ve({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Ly,fromXYZ_M:Oy});const _y=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],we=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var fh=new Ve({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:_y,fromXYZ_M:we}),Rl={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Ll=Array(3).fill("<percentage> | <number>[0, 255]"),Ol=Array(3).fill("<number>[0, 255]");var en=new Ve({id:"srgb",name:"sRGB",base:fh,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Ll},rgb_number:{name:"rgb",commas:!0,coords:Ol,noAlpha:!0},color:{},rgba:{coords:Ll,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ol},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Rl.black,t.alpha=0):t.coords=Rl[e],t.coords)return t}}}}),dh=new Ve({id:"p3",cssId:"display-p3",name:"P3",base:ch,fromBase:en.fromBase,toBase:en.toBase});Ze.display_space=en;let Vy;if(typeof CSS<"u"&&CSS.supports)for(let e of[Ke,lh,dh]){let t=e.getMinCoords(),n=Nn({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Ze.display_space=e;break}}function Uy(e,{space:t=Ze.display_space,...r}={}){let n=Nn(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Ze.display_space)n=new String(n),n.color=e;else{let s=e;if((e.coords.some(rr)||rr(e.alpha))&&!(Vy??=CSS.supports("color","hsl(none 50% 50%)"))&&(s=Qr(e),s.coords=s.coords.map(pe),s.alpha=pe(s.alpha),n=Nn(s,r),CSS.supports("color",n)))return n=new String(n),n.color=s,n;s=ie(s,t),n=new String(Nn(s,r)),n.color=s}return n}function Wy(e,t){return e=V(e),t=V(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ir(e){return ze(e,[be,"y"])}function hh(e,t){_t(e,[be,"y"],t)}function jy(e){Object.defineProperty(e.prototype,"luminance",{get(){return ir(this)},set(t){hh(this,t)}})}var qy=Object.freeze({__proto__:null,getLuminance:ir,register:jy,setLuminance:hh});function zy(e,t){e=V(e),t=V(t);let r=Math.max(ir(e),0),n=Math.max(ir(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Ky=.56,Gy=.57,Zy=.62,Yy=.65,_l=.022,Jy=1.414,Hy=.1,Qy=5e-4,Xy=1.14,Vl=.027,e2=1.14;function Ul(e){return e>=_l?e:e+(_l-e)**Jy}function Nr(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function t2(e,t){t=V(t),e=V(e);let r,n,s,i,o,a;t=ie(t,"srgb"),[i,o,a]=t.coords;let u=Nr(i)*.2126729+Nr(o)*.7151522+Nr(a)*.072175;e=ie(e,"srgb"),[i,o,a]=e.coords;let l=Nr(i)*.2126729+Nr(o)*.7151522+Nr(a)*.072175,c=Ul(u),f=Ul(l),m=f>c;return Math.abs(f-c)<Qy?n=0:m?(r=f**Ky-c**Gy,n=r*Xy):(r=f**Yy-c**Zy,n=r*e2),Math.abs(n)<Hy?s=0:n>0?s=n-Vl:s=n+Vl,s*100}function r2(e,t){e=V(e),t=V(t);let r=Math.max(ir(e),0),n=Math.max(ir(t),0);n>r&&([r,n]=[n,r]);let s=r+n;return s===0?0:(r-n)/s}const n2=5e4;function s2(e,t){e=V(e),t=V(t);let r=Math.max(ir(e),0),n=Math.max(ir(t),0);return n>r&&([r,n]=[n,r]),n===0?n2:(r-n)/n}function i2(e,t){e=V(e),t=V(t);let r=ze(e,[Ke,"l"]),n=ze(t,[Ke,"l"]);return Math.abs(r-n)}const o2=216/24389,Wl=24/116,bs=24389/27;let no=xe.D65;var Ko=new T({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:no,base:be,fromBase(e){let r=e.map((n,s)=>n/no[s]).map(n=>n>o2?Math.cbrt(n):(bs*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Wl?Math.pow(t[0],3):(116*t[0]-16)/bs,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/bs,t[2]>Wl?Math.pow(t[2],3):(116*t[2]-16)/bs].map((n,s)=>n*no[s])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const so=Math.pow(5,.5)*.5+.5;function a2(e,t){e=V(e),t=V(t);let r=ze(e,[Ko,"l"]),n=ze(t,[Ko,"l"]),s=Math.abs(Math.pow(r,so)-Math.pow(n,so)),i=Math.pow(s,1/so)*Math.SQRT2-40;return i<7.5?0:i}var Ps=Object.freeze({__proto__:null,contrastAPCA:t2,contrastDeltaPhi:a2,contrastLstar:i2,contrastMichelson:r2,contrastWCAG21:zy,contrastWeber:s2});function u2(e,t,r={}){es(r)&&(r={algorithm:r});let{algorithm:n,...s}=r;if(!n){let i=Object.keys(Ps).map(o=>o.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=V(e),t=V(t);for(let i in Ps)if("contrast"+n.toLowerCase()===i.toLowerCase())return Ps[i](e,t,s);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function gi(e){let[t,r,n]=ts(e,be),s=t+15*r+3*n;return[4*t/s,9*r/s]}function mh(e){let[t,r,n]=ts(e,be),s=t+r+n;return[t/s,r/s]}function l2(e){Object.defineProperty(e.prototype,"uv",{get(){return gi(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return mh(this)}})}var c2=Object.freeze({__proto__:null,register:l2,uv:gi,xy:mh});function An(e,t,r={}){es(r)&&(r={method:r});let{method:n=Ze.deltaE,...s}=r;for(let i in Xr)if("deltae"+n.toLowerCase()===i.toLowerCase())return Xr[i](e,t,s);throw new TypeError(`Unknown deltaE method: ${n}`)}function f2(e,t=.25){let n=[T.get("oklch","lch"),"l"];return _t(e,n,s=>s*(1+t))}function d2(e,t=.25){let n=[T.get("oklch","lch"),"l"];return _t(e,n,s=>s*(1-t))}var h2=Object.freeze({__proto__:null,darken:d2,lighten:f2});function ph(e,t,r=.5,n={}){return[e,t]=[V(e),V(t)],er(r)==="object"&&([r,n]=[.5,r]),rs(e,t,n)(r)}function gh(e,t,r={}){let n;Ia(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:s,deltaEMethod:i,steps:o=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[V(e),V(t)],n=rs(e,t,u));let l=An(e,t),c=s>0?Math.max(o,Math.ceil(l/s)+1):o,f=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)f=[{p:.5,color:n(.5)}];else{let m=1/(c-1);f=Array.from({length:c},(p,y)=>{let w=y*m;return{p:w,color:n(w)}})}if(s>0){let m=f.reduce((p,y,w)=>{if(w===0)return 0;let A=An(y.color,f[w-1].color,i);return Math.max(p,A)},0);for(;m>s;){m=0;for(let p=1;p<f.length&&f.length<a;p++){let y=f[p-1],w=f[p],A=(w.p+y.p)/2,D=n(A);m=Math.max(m,An(D,y.color),An(D,w.color)),f.splice(p,0,{p:A,color:n(A)}),p++}}}return f=f.map(m=>m.color),f}function rs(e,t,r={}){if(Ia(e)){let[u,l]=[e,t];return rs(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:s,progression:i,premultiplied:o}=r;e=V(e),t=V(t),e=Qr(e),t=Qr(t);let a={colors:[e,t],options:r};if(n?n=T.get(n):n=T.registry[Ze.interpolationSpace]||e.space,s=s?T.get(s):n,e=ie(e,n),t=ie(t,n),e=sr(e),t=sr(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[c,f]=[ze(e,l),ze(t,l)];isNaN(c)&&!isNaN(f)?c=f:isNaN(f)&&!isNaN(c)&&(f=c),[c,f]=K1(u,[c,f]),_t(e,l,c),_t(t,l,f)}return o&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=i?i(u):u;let l=e.coords.map((m,p)=>{let y=t.coords[p];return _n(m,y,u)}),c=_n(e.alpha,t.alpha,u),f={space:n,coords:l,alpha:c};return o&&(f.coords=f.coords.map(m=>m/c)),s!==n&&(f=ie(f,s)),f},{rangeArgs:a})}function Ia(e){return er(e)==="function"&&!!e.rangeArgs}Ze.interpolationSpace="lab";function m2(e){e.defineFunction("mix",ph,{returns:"color"}),e.defineFunction("range",rs,{returns:"function<color>"}),e.defineFunction("steps",gh,{returns:"array<color>"})}var p2=Object.freeze({__proto__:null,isRange:Ia,mix:ph,range:rs,register:m2,steps:gh}),yh=new T({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:en,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,s,i]=e,[o,a,u]=[NaN,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:o=(s-i)/l+(s<i?6:0);break;case s:o=(i-n)/l+2;break;case i:o=(n-s)/l+4}o=o*60}return a<0&&(o+=180,a=Math.abs(a)),o>=360&&(o-=360),[o,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function s(i){let o=(i+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(o-3,9-o,1))}return[s(0),s(8),s(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),wh=new T({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:yh,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let s=n+r*Math.min(n,1-n);return[t,s===0?0:200*(1-n/s),100*s]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let s=n*(1-r/2);return[t,s===0||s===1?0:(n-s)/Math.min(s,1-s)*100,s*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),g2=new T({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:wh,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let s=r+n;if(s>=1){let a=r/s;return[t,0,a*100]}let i=1-n,o=i===0?0:1-r/i;return[t,o*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const y2=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],w2=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var vh=new Ve({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:y2,fromXYZ_M:w2}),v2=new Ve({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:vh,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const b2=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],D2=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var bh=new Ve({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Ma,toXYZ_M:b2,fromXYZ_M:D2});const E2=1/512,A2=16/512;var C2=new Ve({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:bh,toBase(e){return e.map(t=>t<A2?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=E2?t**(1/1.8):16*t)}}),$2=new T({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Hr,fromBase(e){let[t,r,n]=e,s;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),vt(s)]},toBase(e){let[t,r,n]=e,s,i;return isNaN(n)?(s=0,i=0):(s=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,s,i]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let Dh=xe.D65;const k2=216/24389,jl=24389/27,[ql,zl]=gi({space:be,coords:Dh});var Eh=new T({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Dh,base:be,fromBase(e){let t=[pe(e[0]),pe(e[1]),pe(e[2])],r=t[1],[n,s]=gi({space:be,coords:t});if(!Number.isFinite(n)||!Number.isFinite(s))return[0,0,0];let i=r<=k2?jl*r:116*Math.cbrt(r)-16;return[i,13*i*(n-ql),13*i*(s-zl)]},toBase(e){let[t,r,n]=e;if(t===0||rr(t))return[0,0,0];r=pe(r),n=pe(n);let s=r/(13*t)+ql,i=n/(13*t)+zl,o=t<=8?t/jl:Math.pow((t+16)/116,3);return[o*(9*s/(4*i)),o,o*((12-3*s-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Ra=new T({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Eh,fromBase(e){let[t,r,n]=e,s;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),vt(s)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const S2=216/24389,F2=24389/27,Kl=we[0][0],Gl=we[0][1],io=we[0][2],Zl=we[1][0],Yl=we[1][1],oo=we[1][2],Jl=we[2][0],Hl=we[2][1],ao=we[2][2];function Mr(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function Hs(e){const t=Math.pow(e+16,3)/1560896,r=t>S2?t:e/F2,n=r*(284517*Kl-94839*io),s=r*(838422*io+769860*Gl+731718*Kl),i=r*(632260*io-126452*Gl),o=r*(284517*Zl-94839*oo),a=r*(838422*oo+769860*Yl+731718*Zl),u=r*(632260*oo-126452*Yl),l=r*(284517*Jl-94839*ao),c=r*(838422*ao+769860*Hl+731718*Jl),f=r*(632260*ao-126452*Hl);return{r0s:n/i,r0i:s*e/i,r1s:n/(i+126452),r1i:(s-769860)*e/(i+126452),g0s:o/u,g0i:a*e/u,g1s:o/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/f,b0i:c*e/f,b1s:l/(f+126452),b1i:(c-769860)*e/(f+126452)}}function Ql(e,t){const r=t/360*Math.PI*2,n=Mr(e.r0s,e.r0i,r),s=Mr(e.r1s,e.r1i,r),i=Mr(e.g0s,e.g0i,r),o=Mr(e.g1s,e.g1i,r),a=Mr(e.b0s,e.b0i,r),u=Mr(e.b1s,e.b1i,r);return Math.min(n,s,i,o,a,u)}var x2=new T({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ra,gamutSpace:en,fromBase(e){let[t,r,n]=[pe(e[0]),pe(e[1]),pe(e[2])],s;if(t>99.9999999)s=0,t=100;else if(t<1e-8)s=0,t=0;else{let i=Hs(t),o=Ql(i,n);s=r/o*100}return[n,s,t]},toBase(e){let[t,r,n]=[pe(e[0]),pe(e[1]),pe(e[2])],s;if(n>99.9999999)n=100,s=0;else if(n<1e-8)n=0,s=0;else{let i=Hs(n);s=Ql(i,t)/100*r}return[n,s,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});we[0][0];we[0][1];we[0][2];we[1][0];we[1][1];we[1][2];we[2][0];we[2][1];we[2][2];function Br(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Xl(e){let t=Br(e.r0s,e.r0i),r=Br(e.r1s,e.r1i),n=Br(e.g0s,e.g0i),s=Br(e.g1s,e.g1i),i=Br(e.b0s,e.b0i),o=Br(e.b1s,e.b1i);return Math.min(t,r,n,s,i,o)}var T2=new T({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ra,gamutSpace:"self",fromBase(e){let[t,r,n]=[pe(e[0]),pe(e[1]),pe(e[2])],s;if(t>99.9999999)s=0,t=100;else if(t<1e-8)s=0,t=0;else{let i=Hs(t),o=Xl(i);s=r/o*100}return[n,s,t]},toBase(e){let[t,r,n]=[pe(e[0]),pe(e[1]),pe(e[2])],s;if(n>99.9999999)n=100,s=0;else if(n<1e-8)n=0,s=0;else{let i=Hs(n);s=Xl(i)/100*r}return[n,s,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const ec=203,tc=2610/2**14,N2=2**14/2610,M2=2523/2**5,rc=2**5/2523,nc=3424/2**12,sc=2413/2**7,ic=2392/2**7;var B2=new Ve({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:pi,toBase(e){return e.map(function(t){return(Math.max(t**rc-nc,0)/(sc-ic*t**rc))**N2*1e4/ec})},fromBase(e){return e.map(function(t){let r=Math.max(t*ec/1e4,0),n=nc+sc*r**tc,s=1+ic*r**tc;return(n/s)**M2})}});const oc=.17883277,ac=.28466892,uc=.55991073,uo=3.7743;var P2=new Ve({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:pi,toBase(e){return e.map(function(t){return t<=.5?t**2/3*uo:(Math.exp((t-uc)/oc)+ac)/12*uo})},fromBase(e){return e.map(function(t){return t/=uo,t<=1/12?Math.sqrt(3*t):oc*Math.log(12*t-ac)+uc})}});const Ah={};nr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Ch(e.W1,e.W2,e.options.method))});nr.add("chromatic-adaptation-end",e=>{e.M||(e.M=Ch(e.W1,e.W2,e.options.method))});function yi({id:e,toCone_M:t,fromCone_M:r}){Ah[e]=arguments[0]}function Ch(e,t,r="Bradford"){let n=Ah[r],[s,i,o]=oe(n.toCone_M,e),[a,u,l]=oe(n.toCone_M,t),c=[[a/s,0,0],[0,u/i,0],[0,0,l/o]],f=oe(c,n.toCone_M);return oe(n.fromCone_M,f)}yi({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});yi({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});yi({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});yi({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(xe,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});xe.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const I2=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],R2=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var $h=new Ve({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:xe.ACES,toXYZ_M:I2,fromXYZ_M:R2});const Ds=2**-16,lo=-.35828683,Es=(Math.log2(65504)+9.72)/17.52;var L2=new Ve({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[lo,Es],name:"Red"},g:{range:[lo,Es],name:"Green"},b:{range:[lo,Es],name:"Blue"}},referred:"scene",base:$h,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Ds)*2:r<Es?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Ds)+9.72)/17.52:t<Ds?(Math.log2(Ds+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),lc=Object.freeze({__proto__:null,A98RGB:v2,A98RGB_Linear:vh,ACEScc:L2,ACEScg:$h,CAM16_JMh:$y,HCT:Un,HPLuv:T2,HSL:yh,HSLuv:x2,HSV:wh,HWB:g2,ICTCP:jo,JzCzHz:Wo,Jzazbz:Xd,LCH:Vn,LCHuv:Ra,Lab:Ke,Lab_D65:Ko,Luv:Eh,OKLCH:$2,OKLab:Hr,P3:dh,P3_Linear:ch,ProPhoto:C2,ProPhoto_Linear:bh,REC_2020:lh,REC_2020_Linear:pi,REC_2100_HLG:P2,REC_2100_PQ:B2,XYZ_ABS_D65:Ba,XYZ_D50:Ma,XYZ_D65:be,sRGB:en,sRGB_Linear:fh});let X=class Be{constructor(...t){let r;t.length===1&&(r=V(t[0]));let n,s,i;r?(n=r.space||r.spaceId,s=r.coords,i=r.alpha):[n,s,i]=t,Object.defineProperty(this,"space",{value:T.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=s?s.slice():[0,0,0],this.alpha=i>1||i===void 0?1:i<0?0:i;for(let o=0;o<this.coords.length;o++)this.coords[o]==="NaN"&&(this.coords[o]=NaN);for(let o in this.space.coords)Object.defineProperty(this,o,{get:()=>this.get(o),set:a=>this.set(o,a)})}get spaceId(){return this.space.id}clone(){return new Be(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Uy(this,...t);return r.color=new Be(r.color),r}static get(t,...r){return t instanceof Be?t:new Be(t,...r)}static defineFunction(t,r,n=r){let{instance:s=!0,returns:i}=n,o=function(...a){let u=r(...a);if(i==="color")u=Be.get(u);else if(i==="function<color>"){let l=u;u=function(...c){let f=l(...c);return Be.get(f)},Object.assign(u,l)}else i==="array<color>"&&(u=u.map(l=>Be.get(l)));return u};t in Be||(Be[t]=o),s&&(Be.prototype[t]=function(...a){return o(this,...a)})}static defineFunctions(t){for(let r in t)Be.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Be);else for(let r in t)Be.defineFunction(r,t[r])}};X.defineFunctions({get:ze,getAll:ts,set:_t,setAll:Na,to:ie,equals:Wy,inGamut:Er,toGamut:sr,distance:Qd,toString:Nn});Object.assign(X,{util:V1,hooks:nr,WHITES:xe,Space:T,spaces:T.registry,parse:Jd,defaults:Ze});for(let e of Object.keys(lc))T.register(lc[e]);for(let e in T.registry)Go(e,T.registry[e]);nr.add("colorspace-init-end",e=>{Go(e.id,e),e.aliases?.forEach(t=>{Go(t,e)})});function Go(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(X.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(s,i)=>{try{return T.resolveCoord([t,i]),!0}catch{}return Reflect.has(s,i)},get:(s,i,o)=>{if(i&&typeof i!="symbol"&&!(i in s)){let{index:a}=T.resolveCoord([t,i]);if(a>=0)return s[a]}return Reflect.get(s,i,o)},set:(s,i,o,a)=>{if(i&&typeof i!="symbol"&&!(i in s)||i>=0){let{index:u}=T.resolveCoord([t,i]);if(u>=0)return s[u]=o,this.setAll(e,s),!0}return Reflect.set(s,i,o,a)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}X.extend(Xr);X.extend({deltaE:An});Object.assign(X,{deltaEMethods:Xr});X.extend(h2);X.extend({contrast:u2});X.extend(c2);X.extend(qy);X.extend(p2);X.extend(Ps);const O2=Symbol("no update");class co extends un()("observable-value-update"){}class _2 extends Nd("observable-destroy"){}class V2{listenTarget=new wa;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];return r===O2||(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)?!1:(this.value=r,this.listenTarget.dispatch(new co({detail:r})),!0)}listen(t,r){const n=s=>r(s.detail);return this.listenerMap.set(r,n),t&&r(this.value),this.listenTarget.listen(co,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(co,r)}destroy(){this.listenTarget.dispatch(new _2),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function U2(e,t){return Ag(e,t,(r,n)=>E.isFunction(r)&&E.isFunction(n)?!0:E.strictEquals(r,n))}const kh="__vir__shape__definition__key__do__not__use__in__actual__objects",La="__vir__shape__specifier__key__do__not__use__in__actual__objects",Sh="__vir__custom__specifier__key__do__not__use__in__actual__objects";function Oa(e){return E.hasKey(e,Sh)}function Fh({customName:e,defaultValue:t,checker:r}){return{customName:e,checker:r,defaultValue:t,[Sh]:!0,[La]:!0}}Fh({customName:"UUID",defaultValue:Gr.isUuid("00000000-0000-1000-0000-000000000000"),checker:E.isUuid});function _a(e){return E.hasKey(e,kh)}var ge;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional",e.Tuple="tuple"})(ge||(ge={}));function W2(...e){return lr(e,ge.And)}function Zo(...e){return lr(e,ge.Enum)}function _(...e){return lr(e,ge.Exact)}function wi(...e){return lr(e,ge.IndexedKeys)}function ee(...e){return lr(e,ge.Or)}function j2(e){return lr([e],ge.Unknown)}function Lr(e,t){return lr([e,t],ge.NumericRange)}function je(e){return lr([e],ge.Optional)}function vi(e){return bt(e,ge.And)}function bi(e){return bt(e,ge.Class)}function Di(e){return bt(e,ge.Enum)}function Ei(e){return bt(e,ge.Exact)}function Ai(e){return bt(e,ge.IndexedKeys)}function xh(e){return bt(e,ge.Tuple)}function ns(e){return bt(e,ge.Or)}function Ci(e){return bt(e,ge.Unknown)}function Th(e){return bt(e,ge.NumericRange)}function Qs(e){return bt(e,ge.Optional)}function bt(e,t){const r=ss(e);return!!r&&r.specifierType===t}function lr(e,t){return{[La]:!0,specifierType:t,parts:e}}function ss(e){if(!(!E.isObject(e)||!E.hasKey(e,La)))return e}class cc extends TypeError{name="DefaultValueConstructionError"}function q2(e,t){const r=t?.constructor,n=e?.constructor?.prototype,s=e?.constructor===r,i=r&&n?n instanceof r:!1;return typeof e==typeof t&&(s||i)}class Ie extends TypeError{name="ShapeMismatchError"}function Nh(e,t,r={}){try{return Mh(e,t,r),!0}catch{return!1}}function Mh(e,t,r={},n=""){try{ke({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}catch(s){throw n?ni(s,n):s}}function Yo(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ke({subject:e,shape:t,keys:r,options:n}){if(Ci(t))return!0;if(_a(t))return ke({subject:e,shape:t.shape,keys:r,options:n});if(Oa(t)){if(!t.checker(e))throw new Ie(`Subject ${h(e)} does not match ${t.customName} shape.`);return!0}const s=Yo(r);if(ss(e))throw new Ie(`Shape test subjects cannot be contain shape specifiers but one was found at ${s}.`);if(xh(t)){if(!E.isArray(e))throw new Ie(`Subject is not an array and cannot match tuple definition at key ${s}`);return t.parts.every((o,a)=>{const u=e[a];return ke({keys:[...r,a],options:n,shape:o,subject:u})})}else{if(Qs(t))return ke({keys:r,options:n,shape:t.parts[0],subject:e});if(Is(e,t,r,n)){if(E.isFunction(t))return E.isFunction(e);if(bi(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(c=>[c,!1])),u=[];let l=!1;if(ns(t)){const c=[];l=t.parts.some(f=>{try{const m=ke({subject:e,shape:f,keys:r,options:n});return Object.assign(a,m),!0}catch(m){if(m instanceof Ie)return c.push(m.message),!1;throw m}}),!l&&E.isLengthAtLeast(c,1)&&u.push(c[0])}else if(vi(t))l=t.parts.every(c=>{try{const f=ke({subject:e,shape:c,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(a,f),!0}catch(f){if(f instanceof Ie)return u.push(f.message),!1;throw f}});else if(Ei(t)){const c=ke({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(a,c),l=!0}else{if(Di(t))throw new Ie(`Cannot compare an enum specifier to an object at ${s}`);if(E.isArray(t)&&E.isArray(o))l=o.every((c,f)=>{const m=t.some(p=>{try{return ke({subject:c,shape:p,keys:[...r,f],options:n}),!0}catch(y){if(y instanceof Ie)return u.push(y.message),!1;throw y}});return a[f]=m,m});else if(Ai(t)){const c=Te(e,(f,m)=>(n.ignoreExtraKeys||ke({shape:t.parts[0].keys,subject:f,keys:[...r,f],options:n}),ke({shape:t.parts[0].values,subject:m,keys:[...r,f],options:n}),!0));Object.assign(a,c),l=!0}else{const c=z2({keys:r,options:n,shape:t,subject:e});Object.assign(a,c),l=!0}}if(u.length)throw new Ie(ri(u));if(!l){const f=`Failed on key(s): ${Object.keys(a).filter(m=>!a[m]).map(m=>Yo([...r,m])).join(",")}`;throw new Ie(f)}return n.ignoreExtraKeys||Object.entries(a).forEach(([c,f])=>{if(!f)throw new Ie(`subject as extra key '${c}' in ${s}.`)}),a}else if(n.exactValues)return e===t}else throw new Ie(`Subject does not match shape definition at key ${s}`)}return!0}function z2({keys:e,options:t,shape:r,subject:n}){const s=Yo(e),i={};if(E.isObject(r)){const o=new Set(Q(r)),a=new Set(Q(n));o.forEach(u=>{(u in n||Qs(r[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new Ie(`Subject has extra key '${String(u)}' in ${s}`)}),o.forEach(u=>{const l=r[u],c=ns(l)?l.parts.includes(void 0):!1,f=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!c&&!f)throw new Ie(`Subject missing key '${String(u)}' in ${s}`)}),a.forEach(u=>{if(!(u in n)&&Qs(r[u])){i[u]=!0;return}const l=n[u];if(t.ignoreExtraKeys&&!o.has(u))return;const c=r[u];ke({subject:l,shape:c,keys:[...e,u],options:t}),i[u]=!0})}else throw new Ie(`Shape definition at ${s} was not an object.`);return i}function Is(e,t,r,n,s){const i=ss(t);if(i){if(Oa(i))return i.checker(e);if(Th(i))return E.isNumber(e)?e>=i.parts[0]&&e<=i.parts[1]:!1;if(bi(i))return e instanceof i.parts[0];if(vi(i))return i.parts.every(o=>{try{return ke({subject:e,shape:o,keys:r,options:{...n,ignoreExtraKeys:!0}}),!0}catch{return!1}});if(ns(i))return i.parts.some(o=>{try{return ke({subject:e,shape:o,keys:r,options:n}),!0}catch{return!1}});if(Ei(i))return E.isObject(e)?(ke({subject:e,shape:i.parts[0],keys:r,options:{...n,exactValues:!0}}),!0):e===i.parts[0];if(Di(i))return E.hasValue(Object.values(i.parts[0]),e);if(Ai(i)){if(!E.isObject(e))return!1;const o=K2(e,i,!!n.ignoreExtraKeys),a=Ro(e).every(u=>{try{return ke({subject:u,shape:i.parts[0].values,keys:r,options:n}),!0}catch{return!1}});return o&&a}else if(Ci(i))return!0}return s?t===e:q2(e,t)}function K2(e,t,r){const n=t.parts[0].required,s=t.parts[0].keys,i=Va(t);if(E.isBoolean(i))return Q(e).every(u=>Is(u,s,[],{exactValues:!1,ignoreExtraKeys:r}));const o=n?i.every(u=>Q(e).some(l=>Is(l,u,[],{exactValues:!1,ignoreExtraKeys:!1},!0))):!0;return Q(e).every(u=>i.includes(u)?Is(u,s,[],{exactValues:!1,ignoreExtraKeys:!1}):r)&&o}function Va(e){const t=e.parts[0].keys,r=ss(t);if(E.isPropertyKey(t))return!0;if(r){if(bi(r))return!1;if(vi(r))return!1;if(ns(r)){const n=r.parts.map(s=>Va(wi({...e.parts[0],keys:s})));return n.includes(!1)?!1:n.flat().filter(E.isPropertyKey)}else if(Ei(r)){const n=r.parts.filter(E.isPropertyKey);return n.length!==r.parts.length?!1:n}else{if(Di(r))return Object.values(r.parts[0]);if(Ai(r))return!1;if(Ci(r))return!0}}return!1}function Jo(e){return yr(e)}function yr(e){const t=ss(e);if(Oa(e))return e.defaultValue;if(t){if(xh(t))return t.parts.map(r=>yr(r));if(Qs(t))return yr(t.parts[0]);if(Th(t))return t.parts[0];if(bi(t)){const r=t.parts[0];try{return new r}catch(n){throw new cc(`Failed to create default value for classShape for class '${r.name}': ${Oe(n)}`)}}else{if(ns(t)||Ei(t))return yr(t.parts[0]);if(vi(t))return t.parts.reduce((r,n)=>Object.assign(r,yr(n)),{});if(Di(t))return t.parts[1]||Object.values(t.parts[0])[0];if(Ai(t)){const r=Va(t);return!t.parts[0].required||E.isBoolean(r)?{}:Object.fromEntries(r.map(n=>[n,yr(t.parts[0].values)]))}else{if(Ci(t))return t.parts[0]??{};throw new cc(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return _a(e)?Jo(e.shape):e instanceof RegExp?e:E.isArray(e)?e.map(yr):E.isObject(e)?Te(e,(r,n)=>Jo(n)):e}function rt(e,t=!1){if(_a(e))return e;const r={shape:e,isReadonly:t,get defaultValue(){return Jo(e)},[kh]:!0};return Object.defineProperty(r,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),r}const G2=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Bh=G2.reduce((e,t)=>(e[t]=t,e),{});se.defaultZone.name;const Ph=Bh.UTC,Z2=rt({hour:Lr(Iu.min,Iu.max),minute:Lr(Ru.min,Ru.max),second:Lr(Lu.min,Lu.max),millisecond:Lr(Ou.min,Ou.max),timezone:Zo(Bh,Ph)}),Y2=rt({year:2023,month:Lr(Bu.min,Bu.max),day:Lr(Pu.min,Pu.max),timezone:Ph});rt(W2(Y2,Z2));B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";rt(ee({get:_(N.Month),in:ee(_(N.Year),_(N.Quarter))},{get:_(N.Week),in:ee(_(N.Year),_(N.Quarter),_(N.Month))},{get:_(N.Day),in:ee(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week))},{get:_(N.Hour),in:ee(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week),_(N.Day))},{get:_(N.Minute),in:ee(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week),_(N.Day),_(N.Hour))},{get:_(N.Second),in:ee(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week),_(N.Day),_(N.Hour),_(N.Minute))},{get:_(N.Millisecond),in:ee(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week),_(N.Day),_(N.Hour),_(N.Minute),_(N.Second))}));var fc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(fc||(fc={}));var Ho;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Ho||(Ho={}));var dc;(function(e){e.Year="year",e.Month="month",e.Day="day"})(dc||(dc={}));const J2={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Yg(J2,xt(Ho));se.defaultLocale;rt(Fh({defaultValue:new Date().toISOString(),customName:"UtcIsoString",checker(e){return H2(e)}}));function H2(e){return I.fromISO(e).toUTC().toISO()===e}const Q2=rt({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:j2()});function fo(e){return Nh(e,Q2,{allowExtraKeys:!0})}class Ih extends V2{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||U2}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:X2}=M1,hc=()=>document.createComment(""),yn=(e,t,r)=>{const n=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=n.insertBefore(hc(),s),o=n.insertBefore(hc(),s);r=new X2(i,o,e,e.options)}else{const i=r._$AB.nextSibling,o=r._$AM,a=o!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==o._$AU&&r._$AP(u)}if(i!==s||a){let u=r._$AA;for(;u!==i;){const l=u.nextSibling;n.insertBefore(u,s),u=l}}}return r},gr=(e,t,r=e)=>(e._$AI(t,r),e),ew={},tw=(e,t=ew)=>e._$AH=t,rw=e=>e._$AH,ho=e=>{e._$AP?.(!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const n=t.nextSibling;t.remove(),t=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Vt=e=>(...t)=>({_$litDirective$:e,values:t});class Dt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nw={attribute:!0,type:String,converter:Ks,reflect:!1,hasChanged:$a},sw=(e=nw,t,r)=>{const{kind:n,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),n==="accessor"){const{name:o}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,u,e)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(n==="setter"){const{name:o}=r;return function(a){const u=this[o];t.call(this,a),this.requestUpdate(o,u,e)}}throw Error("Unsupported decorator location: "+n)};function iw(e){return(t,r)=>typeof r=="object"?sw(e,t,r):((n,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,n),o?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wn=Vt(class extends Dt{constructor(e){if(super(e),e.type!==$i.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const s=!!t[n];s===this.st.has(n)||this.nt?.has(n)||(s?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return _e}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=e=>e??z;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qo extends Dt{constructor(t){if(super(t),this.it=z,t.type!==$i.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===z||t==null)return this._t=void 0,this.it=t;if(t===_e)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Qo.directiveName="unsafeHTML",Qo.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mc extends Qo{}mc.directiveName="unsafeSVG",mc.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ow(e,t,r){return e?t(e):r?.(e)}class aw extends Tn{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function uw(e,t,r){const n=!t.length&&!r.length,s=e.length?!1:!t.filter(a=>!!a.index).length;if(n||s)return[...e];const i=e.map(a=>[a]);return i.length||(i[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(i[a]=[])}),t.forEach(a=>{const u=i[a.index];u&&u.splice(0,0,...a.values)}),i.flat()}function Xo(e){return E.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Ua(e){return E.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function Rh(e){return Cd(e,t=>{if(Xo(t))return t.definition;if(Ua(t))return t.tagInterpolationKey||t},E.isTruthy)}const Lh=new WeakMap;function lw(e,t){const r=Rh(t);return Oh(Lh,[e,...r]).value?.template}function cw(e,t,r){const n=Rh(t);return Vh(Lh,[e,...n],r)}function Oh(e,t,r=0){const{currentTemplateAndNested:n,reason:s}=_h(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Oh(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:s}}function _h(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const s=e.get(n);return s==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:s,reason:"key and value exists"}}function Vh(e,t,r,n=0){const{currentTemplateAndNested:s,currentKey:i,reason:o}=_h(e,t,n);if(!i)return{result:!1,reason:o};const a=s??{nested:void 0,template:void 0};if(s||e.set(i,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),Vh(u,t,r,n+1)}function Uh(e,t,r){const n=lw(e,t),s=n??r();if(!n){const a=cw(e,t,s);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const i=s.valuesTransform(t),o=uw(t,i.valueInsertions,i.valueIndexDeletions);return{strings:s.templateStrings,values:o}}function Wh(e,t,r,n){const s=[],i=[],o=[],a=[];return e.forEach((l,c)=>{const f=s.length-1,m=s[f],p=c-1,y=t[p];n&&n(l);let w,A=[];if(typeof m=="string"&&(w=r(m,l,y),w)){s[f]=[m,w.replacement].join(""),o.push(p);const S=w.getExtraValues;A=S?S(y):[],A.length&&S?(s[f]+=" ",A.forEach((M,L)=>{L&&s.push(" ")}),a.push(M=>{const L=M[p],q=S(L);return{index:p,values:q}}),s.push(l)):s[f]+=l}w||s.push(l);const D=e.raw[c];w?(i[f]=[i[f],w.replacement,D].join(""),A.length&&A.forEach(()=>{i.push("")})):i.push(D)}),{templateStrings:Object.assign([],s,{raw:i}),valuesTransform(l){const c=a.flatMap(f=>f(l));return{valueIndexDeletions:o,valueInsertions:c}}}}function fw(...[e,t,r]){if(Ua(r))return{replacement:r.tagName,getExtraValues:void 0}}function dw(e,t){return Wh(e,t,fw)}function k(e,...t){const r=Uh(e,t,()=>dw(e,t));return Bs(r.strings,...r.values)}const hw={allowPolymorphicState:!1};function jh(e,t){const r=e.instanceState;Q(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Q(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}function pc(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class mw extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function Wa(){return e=>class extends mw{static type=e;_type=e;constructor(t){super(e,t)}}}function pt(){return Wa()}function pw(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const s=Wa()([e,n].join("-"));return r[n]=s,r},{}):{}}function gw(e){return e?Te(e,t=>t):{}}function qh(e,t){t in e||iw()(e,t)}function yw(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function gc(e,t){const r=e;function n(o){t?yw(o,e,e.tagName):qh(e,o)}function s(o,a){return n(a),r[a]}return new Proxy({},{get:s,set(o,a,u){n(a);const l=r[a];function c(m){o[a]=m,r[a]=m}const f=e.observablePropertyListenerMap[a];if(l!==u&&fo(l)&&f&&l.removeListener(f),fo(u))if(f)u.listen(!1,f);else{let m=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=m,u.listen(!1,m)}else fo(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return s(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function ww({hostClassNames:e,cssVars:t}){return{hostClasses:Te(e,(r,n)=>({name:he(n),selector:he(`:host(.${n})`)})),cssVars:t}}function vw({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:s}){t&&Q(t).forEach(i=>{const o=t[i],a=r[i];typeof o=="function"&&(o({state:n,inputs:s})?e.classList.add(a):e.classList.remove(a))})}function bw({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function s(o){Q(o).forEach(a=>{const u=o[a];e.instanceState[a]=u})}return{cssVars:r,slotNames:n,dispatch:o=>e.dispatchEvent(o),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:s}}function Dw(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}function ja(e){if(!E.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!E.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...hw,...e.options},r=pw(e.tagName,e.events),n=gw(e.hostClasses);e.hostClasses&&pc(e.tagName,e.hostClasses),e.cssVars&&pc(e.tagName,e.cssVars);const s=e.cssVars?ur(e.cssVars):{},i=Dw(e.slotNames),o=typeof e.styles=="function"?e.styles(ww({hostClassNames:n,cssVars:s})):e.styles||k``,a=e.render;function u(...[c]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:l,inputs:c}}const l=class extends aw{static elementOptions=t;static tagName=e.tagName;static styles=o;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return bw({element:this,eventsMap:r,cssVars:s,slotNamesMap:i})}static assign=u;static events=r;static render=a;static hostClasses=n;static cssVars=s;static init=e;static slotNames=i;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const c=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(c);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");Q(m).forEach(p=>{qh(this,p),this.instanceState[p]=m[p]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(c)instanceof Promise))throw new TypeError("init cannot be asynchronous");const f=a(c);if(f instanceof Promise)throw new TypeError("render cannot be asynchronous");return vw({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:c.state,inputs:c.inputs}),this._lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},f}catch(c){const f=ni(c,`Failed to render ${e.tagName}`);return console.error(f),this._lastRenderError=f,Oe(f)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const c=this.createRenderParams();if(e.init(c)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(c=>{E.hasKey(c,"destroy")&&E.isFunction(c.destroy)&&c.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const c=this.createRenderParams();if(e.cleanup(c)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(c){jh(this,c)}observablePropertyListenerMap={};instanceInputs=gc(this,!1);instanceState=gc(this,!t.allowPolymorphicState);constructor(){super(),this.definition=l}};return Object.defineProperties(l,{name:{value:e1(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function qa(...e){return ar.isEmpty(e),t=>{const r=t;if(!E.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return ja({...r,options:{...r.options}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yc=(e,t,r)=>{const n=new Map;for(let s=t;s<=r;s++)n.set(e[s],s);return n},Ew=Vt(class extends Dt{constructor(e){if(super(e),e.type!==$i.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const s=[],i=[];let o=0;for(const a of e)s[o]=n?n(a,o):o,i[o]=r(a,o),o++;return{values:i,keys:s}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const s=rw(e),{values:i,keys:o}=this.dt(t,r,n);if(!Array.isArray(s))return this.ut=o,i;const a=this.ut??=[],u=[];let l,c,f=0,m=s.length-1,p=0,y=i.length-1;for(;f<=m&&p<=y;)if(s[f]===null)f++;else if(s[m]===null)m--;else if(a[f]===o[p])u[p]=gr(s[f],i[p]),f++,p++;else if(a[m]===o[y])u[y]=gr(s[m],i[y]),m--,y--;else if(a[f]===o[y])u[y]=gr(s[f],i[y]),yn(e,u[y+1],s[f]),f++,y--;else if(a[m]===o[p])u[p]=gr(s[m],i[p]),yn(e,s[f],s[m]),m--,p++;else if(l===void 0&&(l=yc(o,p,y),c=yc(a,f,m)),l.has(a[f]))if(l.has(a[m])){const w=c.get(o[p]),A=w!==void 0?s[w]:null;if(A===null){const D=yn(e,s[f]);gr(D,i[p]),u[p]=D}else u[p]=gr(A,i[p]),yn(e,s[f],A),s[w]=null;p++}else ho(s[m]),m--;else ho(s[f]),f++;for(;p<=y;){const w=yn(e,u[y+1]);gr(w,i[p]),u[p++]=w}for(;f<=m;){const w=s[f++];w!==null&&ho(w)}return this.ut=o,tw(e,u),_e}}),Aw=Ew;function is(e,t){return jn(e,t),e.element}function Cw(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function jn(e,t){const r=Cw(e),n=r?`: in ${r}`:"";if(e.type!==$i.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function $w(e,t){return Vt(class extends Dt{element;constructor(r){super(r),this.element=Gr.instanceOf(is(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),_e}})}const kw=$w("attributes",({element:e,params:[t],directive:r})=>{const s=Xn(r,"allAttributesApplied",()=>new Set);Q(t).forEach(i=>{if(i.toLowerCase()!==i)throw new Error(`Cannot assign attribute name with uppercase letters: ${i}`);s.add(i)}),s.forEach(i=>{const o=t[i];o==null||o===!1||o===z?e.removeAttribute(i):o===""||o===!0?e.setAttribute(i,""):e.setAttribute(i,String(o))})});function Sw(e){const t=Vt(class extends Dt{element;constructor(r){super(r),this.element=is(r,e)}render(r){return this.element.setAttribute(e,r),_e}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function Y(e,t){return Fw(e,t)}const Fw=Vt(class extends Dt{element;lastListenerMetaData;constructor(e){super(e),this.element=is(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),_e}}),wc="onDomCreated",vc=Vt(class extends Dt{element;constructor(e){super(e),jn(e,wc)}update(e,[t]){jn(e,wc);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),mo="onResize",zh=Vt(class extends Dt{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),jn(e,mo)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${mo} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){jn(e,mo),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function Le(e,t,r){return ow(e,()=>t,()=>r)}const{attributeDirective:xw}=Sw("data-test-id"),Cn=xw;Q({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",InputsType:"",render:"",slotNames:"",StateType:"",styles:"",tagName:"",UpdateStateType:""});function Kh(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return{defineElement:(...n)=>s=>(t(s),qa(...n)(r(s))),defineElementNoInputs:n=>(t(n),ja(r(n)))}}function Tw(e,t){return Nw(void 0,e)}const Nw=Vt(class extends Dt{element;constructor(e){super(e),this.element=is(e,"assign")}render(e,t){return jh(this.element,t),_e}}),Mw={};function Bw(e,t){return t.map((r,n)=>{const s=e[n],i=e[n+1];if(s&&i){const{shouldHaveTagNameHere:o}=Gh(s,i);if(o&&E.isString(r))return{tagName:r,tagInterpolationKey:Xn(Mw,r,()=>({tagName:r}))}}return r})}function Gh(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function Pw(...[e,t,r]){const n=Xo(r)?r.definition:r,{isOpeningTag:s,shouldHaveTagNameHere:i}=Gh(e,t),o=Ua(n);if(o&&i&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(i&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!i||!o?void 0:{replacement:n.tagName,getExtraValues(u){const l=Xo(u)?u.inputs:void 0;return[s&&l?Tw(l):void 0].filter(E.isTruthy)}}}function Iw(e){}function Rw(e){return Wh(e.strings,e.values,Pw,Iw)}function v(e,...t){const r=Bw(e,t),n=$1(e,...r),s=Uh(e,r,()=>Rw(n));return{...n,strings:s.strings,values:s.values}}function Zh(e){return Te(e,(t,r)=>r instanceof X?he(r.toString({format:"hex"})):Zh(r))}const Lw="dodgerblue";function ea(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function po({background:e,foreground:t}){return{background:e??new X(ea(t)),foreground:t??new X(ea(e))}}function Ow(e){return e==="black"?"white":"black"}const _w={black:{foregroundFaint1:new X("#ccc"),foregroundFaint2:new X("#eee")},white:{foregroundFaint1:new X("#ccc"),foregroundFaint2:new X("#eee")}},Vw={black:{backgroundFaint1:new X("#666"),backgroundFaint2:new X("#444")},white:{backgroundFaint1:new X("#ccc"),backgroundFaint2:new X("#fafafa")}};function bc({themeColor:e=Lw,themeStyle:t="light"}={}){const r=new X(e),n=new X(t==="dark"?"black":"white"),s=ea(n),i=new X(s),o={nav:{hover:po({background:r.clone().set({"hsl.l":93})}),active:po({background:r.clone().set({"hsl.l":90})}),selected:po({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Vw[Ow(s)],foreground:i,..._w[s]}};return Zh(o)}var Pt=(e=>(e.Footer="book-footer",e.NavHeader="book-nav-header",e))(Pt||{});async function ta(e=1){const t=new qc;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function Uw(e,t){return{element:e,children:Yh(e)}}function Yh(e,t,r){return Ww(e).map(n=>{const s=Yh(n);return{element:n,children:s}})}function Ww(e){return[...e.children,...e.shadowRoot?.children??[]]}function go(e){return e.matches(":focus")}function Xs(e){if(e instanceof ShadowRoot)return Xs(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:Xs(t)}function Jh(e,t){if(t(e))return e;const r=Xs(e);if(r)return Jh(r,t)}async function jw(e){return qw(e,1)}async function qw(e,t){return new Promise(r=>{new IntersectionObserver((s,i)=>{ar.isLengthAtLeast(s,1),i.disconnect(),r(s[0].intersectionRatio>=t)}).observe(e)})}function $n(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const s=t.name,i=n?.constructor.name,o=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${s}'. Got '${i}'.`:`Target from event '${e.type}' was not of type '${s}'. Got '${i}'.`;throw new Error(o)}return n}function zw(e){const t=Xs(e);return t&&Jh(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function Kw({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const s=t.toLowerCase(),i=e.toLowerCase();e:for(let o=0,a=0;o<n;o++){const u=i.codePointAt(o);for(;a<r;)if(s.codePointAt(a++)===u)continue e;return!1}return!0}const Gw=$d(32);function Rs(e){return e.join(Gw)}function Hh(e){if(!e.length)return[];const t=Rs(e),r=Hh(e.slice(0,-1));return[t,...r]}const Zw=["error","errors"];function Yw(e){return Zw.includes(e)}function Jw({flattenedNodes:e,searchQuery:t}){const r={};function n(s){Object.values(s.children).map(o=>(n(o),Rs(o.fullUrlBreadcrumbs))).forEach(o=>r[o]=!0)}return e.forEach(s=>{const i=s.entry.errors.length&&Yw(t),o=Rs(s.fullUrlBreadcrumbs);if(Kw({searchIn:[s.entry.title,...s.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[o]){const u=Hh(s.fullUrlBreadcrumbs);n(s),u.forEach(l=>r[l]=!0)}else r[o]=!1}),e.filter(s=>{const i=Rs(s.fullUrlBreadcrumbs),o=r[i];if(!E.isBoolean(o))throw new TypeError(`Failed to find '${s.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return o})}class za extends Error{name="SpaRouterError"}class Dc extends za{name="GlobalUrlEventsConsolidationError"}class Hw extends za{name="SanitizationDepthMaxed"}rt({paths:[""],search:je(ee(void 0,wi({keys:"",values:[""],required:!1}))),hash:je(ee(void 0,""))});const Qw=rt({basePath:ee("",void 0),sanitizeRoute:e=>e,maxListenerCount:ee(1,void 0),disableWarnings:ee(void 0,!1),isPaused:ee(!1,void 0)}),yo="://";function Ka(...e){const t=e.join("/"),[r,n=""]=t.includes(yo)?t.split(yo):["",t];let s=!1;const i=n.replace(/\/{2,}/g,"/").split("/").reduce((o,a,u,l)=>{if(s)return o;const c=l[u+1];let f=a;const m=c?.startsWith("?"),p=!a.includes("?")&&m,y=c==="?";if(m||p){s=!0;let w=!1;const A=l.slice(u+2).reduce((D,S)=>(S.includes("#")&&(w=!0),w?D.concat(S):[D,S].join("&")),"");f=[a,c,y?Vr({value:A,prefix:"&"}):A].join("")}return o.concat(f)},[]);return[r,r?yo:"",i.join("/")].join("")}var tn;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(tn||(tn={}));var rn;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(rn||(rn={}));const Xw=rt({encoding:je(ee(void 0,Zo(tn))),searchParamStrategy:je(ee(void 0,Zo(rn)))});function As(e,t){return e.map(r=>{if(r!=null)return Wr(String(r),t)}).filter(r=>r!=null)}function Wr(e,t){return t?.encoding===tn.Decode?decodeURIComponent(e):t?.encoding===tn.Encode?encodeURIComponent(e):e}const ev=rt(wi({keys:"",values:[""],required:!0}));function tv(e,t,r){const n=r?.searchParamStrategy===rn.Clear?{}:Te(e,(o,a)=>E.isString(a)?[a]:a),s=Te(t,(o,a)=>{if(r?.searchParamStrategy===rn.Append){const u=n[o],l=E.isArray(u)?u:[u];if(a){const c=E.isArray(a)?a:[a];return As([...l,...c],r)}else return As(l,r)}else return E.isArray(a)?As(a,r):a?As([a],r):void 0});return fi({...n,...s},(o,a)=>!!a)}function Qh(e,t){return E.isString(e)&&!e.includes("?")?{}:(E.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(i=>{const[o,...a]=Gg(i,"=");return[o,a.length?a.join("="):void 0]}).reduce((i,[o,a])=>{const u=Xh({options:t,key:o,value:a}),l=Xn(i,u.key,()=>[]);return a!=null&&l.push(u.value),i},{})}function rv(e){if(e!=null)return E.isArray(e)?[...e]:e===""?[]:[e]}function nv(e,t){const r=Cd(Object.entries(e),([n,s])=>{const i=rv(s);return i?.length?i.map(o=>{const a=Xh({options:t,key:n,value:o});return[a.key,a.value].join("=")}):[n]},(n,[,s])=>s!=null).flat();return r.length?dt({value:r.join("&"),prefix:"?"}):""}function Xh({options:e,key:t,value:r}){return{key:Wr(t,e),value:Wr(String(r),e)}}function e0({hash:e,hostname:t,password:r,pathname:n,port:s,protocol:i,search:o,username:a}){return[i?i+"://":"",a?a+":":"",r?r+"@":"",ki({hostname:t,port:s}),Ga({hash:e,pathname:n,search:o})].join("")}function t0({pathname:e}){const t=Vr({value:e,prefix:"/"});return t?t.split("/"):[]}function Ga({hash:e,pathname:t,search:r}){return[dt({value:t,prefix:"/"}),r?dt({value:r,prefix:"?"}):"",e?dt({value:e,prefix:"#"}):""].join("")}function ki({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function r0({hostname:e,port:t,protocol:r}){return[r,ki({hostname:e,port:t})].filter(E.isTruthy).join("://")}function jr(e,t){const r=E.isString(e)?Vr({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),s=n?dt({value:Wr(n,t),prefix:"#"}):"",i=r.replace(/#[^#]*$/,""),o=i.replace(/^[^?]*(?:\?|$)/,""),a=o?dt({value:Wr(o,t),prefix:"?"}):"",u=i.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=c.replace(/@.*/,""),m=c.replace(/^[^@]*@/,""),p=f!==m,[y,...w]=p?f.split(":").reverse():[],A=w.toReversed().join("").replace(/[/:]/g,"")||"",D=y?.replace(/[/:]/g,"")||"",S=Kg(m.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),M=S[0]?.endsWith("]")?"":S[1]===":"&&S[0]||"",q=m.replace(new RegExp(`:${M}($|/)`),"$1").replace(/\/.*/,""),$e=m.replace(/^[^/]*(\/|$)/,"$1"),st=Wr($e.replace(/^[^/]*(?:\/|$)/,"/"),t),Ne=ki({hostname:q,port:M}),Ue=r0({hostname:q,port:M,protocol:l}),gt=e0({hash:s,hostname:q,password:D,pathname:st,port:M,protocol:l,search:a,username:A}),Et=Qh(a),os=t0({pathname:st});return{fullPath:Ga({hash:s,pathname:st,search:a}),hash:s,host:Ne,hostname:q,href:gt,origin:Ue,password:D,pathname:st,paths:os,port:M,protocol:l,search:a,searchParams:Et,username:A}}rt({hash:je(ee(void 0,"")),search:je(ee(void 0,"",wi({keys:"",required:!1,values:ee(null,void 0,"",-1,!1,0n)}))),hostname:je(ee(void 0,"")),pathname:je(ee(void 0,"")),paths:je(ee(void 0,[""])),protocol:je(ee(void 0,"")),username:je(ee(void 0,"")),password:je(ee(void 0,"")),port:je(ee(void 0,"",-1))});function sv(e,t,r){const n=!!r,s=t==null||Nh(t,Xw),i=s?jr(""):E.instanceOf(e,URL)||E.isString(e)?jr(e):e,o=s?e:t,a=E.isString(o)&&o.startsWith("."),u=E.isString(o)||E.instanceOf(o,URL)?fi(jr(o),(w,A)=>E.isTruthy(A)):o,l=n?r:s?t:void 0,c=Te(i,(w,A)=>{if(!E.hasKey(u,w))return A;const D=u[w];return E.isNumber(D)?String(D):E.isString(D)?w==="hash"&&D?dt({value:D,prefix:"#"}):w==="pathname"?dt({value:D,prefix:"/"}):D:A});E.hasKey(u,"paths")&&u.paths&&(c.pathname=Ka(a?i.pathname:"",...u.paths));const f=E.isString(u.search)?Qh(dt({value:u.search,prefix:"?"})):_g(u.search||{}),m=tv(c.searchParams,f,{...l,encoding:tn.None}),p=nv(m,l);return{...c,searchParams:m,search:p,paths:t0(c),fullPath:Ga(c),host:ki(c),origin:r0(c),href:e0({...c,search:p})}}const iv=rt({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:ev,hash:"",fullPath:"/",href:"/"},!0);({...iv.defaultValue});const ov=0;function n0(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==ov)}const Si="locationchange",Mt=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Ec=Mt?.pushState;function Ac(...e){if(!Ec)return;const t=Ec.apply(Mt,e);return globalThis.dispatchEvent(new Event(Si)),t}const Cc=Mt?.replaceState;function $c(...e){if(!Cc)return;const t=Cc.apply(Mt,e);return globalThis.dispatchEvent(new Event(Si)),t}function av(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Mt)){{if(Mt.pushState===Ac)throw new Dc("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Mt.replaceState===$c)throw new Dc("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Mt.pushState=Ac,Mt.replaceState=$c,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Si))})}}function Cs(e,t){const r=jr(e),n=Vr({value:Vr({value:r.pathname,prefix:dt({value:t||"",prefix:"/"})}),prefix:"/"}),s=n?n.split("/"):[],i=Object.keys(r.searchParams).length?r.searchParams:void 0,o=r.hash?Vr({value:r.hash,prefix:"#"}):void 0;return{paths:s,search:i,hash:o}}class uv{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){Mh(t,Qw),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new Ih({defaultValue:r,equalityCheck:()=>!1}),av(),this.removeGlobalListener=Md(globalThis,Si,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new Hw("Looping route sanitization detected; aborting window URL change listener.");const n=Cs(globalThis.location.href,this.params.basePath),s=t.sanitizeRoute(n);E.jsonEquals(n,s)?(this.sanitizationDepth=0,this.innerObservable.setValue(s)):(this.sanitizationDepth++,this.setRoute(s,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:s}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Ka(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Cs(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...Cs(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),i=this.routeIncludesBasePath(Cs(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return sv(globalThis.location.href,{paths:i.paths,search:i.search,hash:i.hash?dt({value:i.hash,prefix:"#"}):""},{searchParamStrategy:rn.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:s}=jr(n);return this.params.isPaused||!r.force&&E.jsonEquals(jr(globalThis.location.href).fullPath,s)?!1:r.replace?(globalThis.history.replaceState(void 0,"",s),!0):(globalThis.history.pushState(void 0,"",s),!0)}setRouteOnDirectNavigation(t,r){return n0(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new za(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function lv(e){return new uv({basePath:e,sanitizeRoute(t){return{paths:cv(t.paths),hash:void 0,search:void 0}}})}function cv(e){const t=e[0];if(E.isEnumValue(t,ut)){if(t===ut.Book)return[ut.Book,...e.slice(1)];if(t===ut.Search)return e[1]?[t,e[1]]:[ut.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Yr.paths}const ei=Wa()("element-book-change-route"),kc="vira-",{defineElement:fv}=Kh({assertInputs:e=>{if(!e.tagName.startsWith(kc))throw new Error(`Tag name should start with '${kc}' but got '${e.tagName}'`)}}),Ut=fv,C=ur({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"}),dv=X;function hv(e){try{if(!e)throw new Error("invalid empty color");return new dv(e)}catch{throw new Error(`Invalid color: ${h(e)}`)}}function ae({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function Sc(e,t){const r=Q(t).map(n=>{const s=t[n],i=hv(s);return`${C[n].name}: ${i.toString()};`}).join(" ");return ae({name:e.name,svgTemplate:v`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const s0=ae({name:"Check24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ct=ur({"vira-form-input-radius":"8px"}),Fi=k`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,ht=ur({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Cr=ur({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":k`calc(${ct["vira-form-input-radius"].value} + 4px)`});function Za({selector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=2}){const s=he(Sd(n+r+t));return k`
        ${he(e)}::after {
            content: '';
            top: calc(${s} * -1);
            left: calc(${s} * -1);
            position: absolute;
            width: calc(100% + calc(${s} * 2));
            height: calc(100% + calc(${s} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Cr["vira-focus-outline-color"].value};
            border-radius: ${Cr["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Qt=ur({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":Cr["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),mv=k`
    padding: 0;
    margin: 0;
`,Ht=k`
    ${mv};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Fc=k`#e2e2e2`,i0={menuShadow:k`
        filter: drop-shadow(0px 5px 5px ${Fc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:k`
        filter: drop-shadow(0px -5px 5px ${Fc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},qn=k`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,P=Ut()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>k`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),Bt=Ut()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>k`
        :host {
            display: flex;
            ${qn};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${e["vira-dropdown-item-selected"].selector} ${P} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${P} {
            transition: opacity
                ${ht["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${ct["vira-form-input-radius"].value}
                ${ct["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${ct["vira-form-input-radius"].value}
                ${ct["vira-form-input-radius"].value} 0 0;
        }
    `,render({inputs:e}){return v`
            <div class="option">
                <${P.assign({icon:s0})}></${P}>
                <slot>${e.label}</slot>
            </div>
        `}});function pv(e,t){return e>t}function gv(e,t){return e<t}function zn(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var wt;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(wt||(wt={}));var H;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(H||(H={}));function xi(e){const t=e[0]?.[0];if(t)return t.navEntry.navParams.group?xi(t.children):{node:t,coords:{x:0,y:0}}}function xc(e,t,r,n){if(!t){const u=xi(e.children);return u?(zn(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:H.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:H.Navigate}}const{nextNode:s,requiresWrapping:i,coords:o}=o0(t.position,r),a=n?!0:!i;return s&&a?(zn(s.element),{success:!0,defaulted:!1,newElement:s.element,wrapped:i,direction:r,navAction:H.Navigate,coords:o}):s?a?{success:!1,reason:"no conditions matched",direction:r,navAction:H.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:H.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:H.Navigate}}function o0(e,t){const r=e.ancestorChain[e.ancestorChain.length-1]?.node;ar.isDefined(r,"missing parent");const n=Gr.isDefined(r.children[e.nodeCoords.y]),s=r.children.length>1&&(t===wt.Down||t===wt.Up),i=t===wt.Down||t===wt.Right?1:-1,o=i===-1?pv:gv,a=s?Xu(e.nodeCoords.y+i,{min:0,max:r.children.length-1}):e.nodeCoords.y,u=Gr.isDefined(r.children[a]),l=s?e.nodeCoords.x>=u.length?u.length-1:e.nodeCoords.x:Xu(e.nodeCoords.x+i,{min:0,max:n.length-1}),c=r.children[a]?.[l],f=s?o(a,e.nodeCoords.y):o(l,e.nodeCoords.x);return{nextNode:c,requiresWrapping:f,coords:{x:l,y:a}}}function yv(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:H.Pibling};const{nextNode:s,requiresWrapping:i,coords:o}=o0(n,t),a=s?.navEntry.navParams.group?xi(s.children):{node:s,coords:o},u=r?!0:!i;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:H.Pibling}:u?(zn(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:i,coords:a.coords,direction:t,navAction:H.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:H.Pibling}}var qe;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(qe||(qe={}));const Lt={name:"data-nav",js(e){return e?`[${Lt.name}*="${e}"]`:`[${Lt.name}]`},css({baseSelector:e="",navValue:t}={}){return k`
            ${he(e)}${he(Lt.js(t))}
        `}},Ya="navEntry";function a0(e){return Ya in e}function u0(e){if(a0(e)){const t=e[Ya];return Gr.instanceOf(t,l0,"Invalid nav entry")}else return}function wv(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==qe.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class l0{element;navParams;navTreeNode;navValue;eventListener=wv(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return ar.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(Lt.name,""),go(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,s=t===(n===qe.Focused);if(!(this.navParams.group||this.navController.locked||s||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(qe.Focused),go(this.element)||this.element.focus()):(this.removeNavValue(qe.Focused),go(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,H.Focus)}activate(t){const r=this.navValue,n=t===(r===qe.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(qe.Active):this.setNavValue(qe.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,H.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(Lt.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(Lt.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function vv(e,t){Object.entries(t).forEach(([r,n])=>{E.isBoolean(n)&&n?e.setAttribute(r,""):E.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const bv=Vt(class extends Dt{element;lastKey;constructor(e){super(e),this.element=is(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),_e}});function Dv(e){return"group"in e?qe.Group:e.disabled?qe.Disabled:""}function Ev(e,t={}){return bv(h(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;ar.instanceOf(r,HTMLElement);const s={[Lt.name]:Dv(t),tabindex:n?0:void 0};vv(r,s);const i=u0(r)||new l0(r,e,t);a0(r)?(i.navParams=t,i.navController=e):r[Ya]=i,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}function Av(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:H.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:H.Enter};const r=t.position.node.children[0]?.[0];return r?(zn(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:H.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:H.Enter}}function Cv(e,t){return c0([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function c0(e,t,r){for(let n=0;n<t.length;n++){const s=t[n];for(let i=0;i<s.length;i++){const o=s[i],a={ancestorChain:e,nodeCoords:{x:i,y:n},node:o};if(r(a))return a;const u=c0(e.concat(a),o.children,r);if(u)return u}}}function f0(e,t){const r=Cv(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function $v(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:H.Exit};const r=t.position.ancestorChain.toReversed().find(s=>!s.node.root&&!s.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:H.Exit};const{nodeCoords:n}=f0(e,r.navEntry);return zn(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:H.Exit,coords:n}}class kv extends un()("nav-exit"){}class Sv extends un()("nav-exit"){}class Fv extends un()("nav-navigate"){}class xv extends un()("nav-navigate-pibling"){}function Tv(e){return{root:!0,children:d0(e)?.children||[]}}function d0(e){const t=e.element;if(!(t instanceof HTMLElement)||t.getAttribute(Lt.name)===qe.Disabled)return;const n=u0(t),s=Nv(e);if((n?.navParams.group?!!s.length:!1)||s.length||n)return{root:!1,element:t,navEntry:n,children:s}}function Nv(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(u=>r(u)));return}const s=n.navEntry.navParams.x,i=n.navEntry.navParams.y||0,o=Xn(t,i,()=>({noX:[],withX:[],y:i}));s==null?o.noX.push(n):o.withX.push({x:s,node:n})}return e.children.forEach(n=>{const s=d0(n);s&&r(s)}),t.sort((n,s)=>n.y-s.y).map(n=>(n.withX.sort((s,i)=>s.x-i.x),n.withX.forEach(({x:s,node:i})=>{n.noX.splice(s,0,i)}),n.noX)).filter(E.isTruthy)}class Mv extends wa{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){xi(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const s=f0(this.getNavTree(),t);return r?(this.navEntries.forEach(i=>{i!==t&&i.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:s}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0),{success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:s.nodeCoords}}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:H.Navigate,reason:"NavController is locked."};const n=xc(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new Fv({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:H.Enter,reason:"NavController is locked."};const r=Av(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new Sv({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:H.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:H.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return ar.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:H.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===H.Activate&&this.currentNavEntry.entry.focus(!0);const t=$v(this.getNavTree(),this.currentNavEntry);return this.dispatch(new kv({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:H.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),i={...this.currentNavEntry?yv(this.currentNavEntry,r,t):xc(n,void 0,r,t),navAction:H.Pibling};return this.dispatch(new xv({detail:i})),i}buildNavTree(){const t=Uw(this.rootElement),r=Tv(t);return this.cachedNavTree=r,r}}const Bv={option:"dropdown-option"},$s=Ut()({tagName:"vira-dropdown-options",events:{selectionChange:pt()},styles:k`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${ct["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${Qt["vira-form-background-color"].value};
            border: 1px solid ${Qt["vira-form-border-color"].value};
            color: ${Qt["vira-form-foreground-color"].value};
            ${i0.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${Lt.css({baseSelector:".dropdown-item:not(.disabled):not(.selected)",navValue:qe.Focused})} {
            background-color: ${Qt["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${Bt} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${Fi};
            pointer-events: auto;
        }
    `,render({inputs:e,dispatch:t,events:r}){const n=e.options.map(s=>{const i=e.selectedOptions.includes(s),o=s.template||v`
                    <${Bt.assign({label:s.label,selected:i})}></${Bt}>
                `;return v`
                <div
                    class="dropdown-item ${Wn({disabled:!!s.disabled,selected:i})}"
                    ${Cn(Bv.option)}
                    title=${Nt(s.hoverText||void 0)}
                    role="option"
                    ${Ev(e.navController,{disabled:s.disabled||i})}
                    ${Y("mousedown",a=>{a.stopPropagation()})}
                    ${Y("mouseup",a=>{a.stopPropagation(),s.disabled||t(new r.selectionChange(s))})}
                >
                    ${o}
                </div>
            `});return v`
            <slot>${n}</slot>
        `}}),Pv=ae({name:"Chat24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),h0=ae({name:"ChevronUp24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${C["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${C["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),m0=ae({name:"CloseX24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Iv=ae({name:"Commit24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v6m0 8v6"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Rv=ae({name:"Document24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="M13 3v6h6"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),p0=ae({name:"Element16Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),It=ae({name:"Element24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),g0=ae({name:"EyeClosed24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${C["vira-icon-fill-color"].value}
            stroke=${C["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${C["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),y0=ae({name:"EyeOpen24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${C["vira-icon-fill-color"].value}
            stroke=${C["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${C["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),w0=ae({name:"Loader24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Lv=k`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${ht["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Kn=ae({name:"LoaderAnimated24Icon",svgTemplate:v`
        <style>
            ${Lv}
        </style>
        ${w0.svgTemplate}
    `}),Ja=ae({name:"Options24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ov=ae({name:"Pencil24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),_v=ae({name:"Shield24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Vv=ae({name:"SpeakerLoud24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Uv=ae({name:"SpeakerMedium24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Wv=ae({name:"SpeakerMuted24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="M4 20 20 4"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),jv=ae({name:"SpeakerQuiet24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),qv=ae({name:"Star24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),ti=ae({name:"StatusFailure24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),zv=ae({name:"StatusInProgress24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${C["vira-icon-stroke-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width="calc(${C["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${C["vira-icon-stroke-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width="calc(${C["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${C["vira-icon-stroke-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width="calc(${C["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),Kv=ae({name:"StatusSuccess24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ra={Chat24Icon:Pv,Check24Icon:s0,ChevronUp24Icon:h0,CloseX24Icon:m0,Commit24Icon:Iv,Document24Icon:Rv,Element16Icon:p0,Element24Icon:It,EyeClosed24Icon:g0,EyeOpen24Icon:y0,Loader24Icon:w0,LoaderAnimated24Icon:Kn,Options24Icon:Ja,Pencil24Icon:Ov,Shield24Icon:_v,SpeakerLoud24Icon:Vv,SpeakerMedium24Icon:Uv,SpeakerMuted24Icon:Wv,SpeakerQuiet24Icon:jv,Star24Icon:qv,StatusFailure24Icon:ti,StatusInProgress24Icon:zv,StatusSuccess24Icon:Kv};class Gv extends Ih{constructor(){super({defaultValue:document.hidden,equalityCheck:E.strictEquals}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const t=r=>this.updateVisibility(r);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const r=Yv.includes(t.type),n=Zv.includes(t.type),s=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(s)}}const Zv=["blur","focusout","pagehide"],Yv=["focus","focusin","pageshow"],Jv=new Gv;function Hv(e,t){return Jv.listen(e,t)}const Tc={top:0,left:0,right:0,bottom:0};class v0 extends Nd("hide-pop-up"){}class b0 extends un()("nav-select"){}class Qv{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new wa;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[Hv(!1,t=>{t||this.removePopUp()}),tl("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),tl("keydown",t=>{const r=t.code;if(r==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(r==="ArrowDown")t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wt.Down,allowWrapping:!1});else if(r==="ArrowUp")t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wt.Up,allowWrapping:!1});else if(r==="ArrowLeft")t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wt.Left,allowWrapping:!1});else if(r==="ArrowRight")t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wt.Right,allowWrapping:!1});else if(r==="Enter"||r==="Return"){const n=this.navController.enterInto({fallbackToActivate:!0});n.success&&(this.listenTarget.dispatch(new b0({detail:n.coords})),t.stopImmediatePropagation(),t.preventDefault())}}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new v0)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},s=zw(t);ar.instanceOf(s,HTMLElement);const i=t.getBoundingClientRect(),o=s.getBoundingClientRect(),a=s.offsetWidth-s.clientWidth,u=s.offsetHeight-s.clientHeight,l=s===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-u},c=Te(Tc,p=>i[p]),f=Te(Tc,p=>{const y=l[p],w=c[p];return Math.abs(y-w)}),m=f.top>f.bottom+n.verticalDiffThreshold&&f.bottom<n.minDownSpace;return this.attachGlobalListeners(),{popDown:!m,positions:{container:l,root:c,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function Xv({selected:e,options:t,isMultiSelect:r}){if(e.length&&t.length){const n=t.filter(s=>e.includes(s.id));return n.length>1&&!r?(console.error("vira-dropdown has multiple selections but `isMultiSelect` is not `true`. Truncating to the first selection."),n.slice(0,1)):n}else return[]}function eb(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${r1(r)}`)}function Nc(e,t,r){return r?t.includes(e)?t.filter(n=>n!==e):[...t,e]:[e]}function Mc({open:e,emitEvent:t},{updateState:r,popUpManager:n,dispatch:s,host:i}){e?r({showPopUpResult:n.showPopUp(i)}):n.removePopUp(),t&&s(e)}const ks={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},kn=Ut()({tagName:"vira-dropdown",state({host:e}){return{showPopUpResult:void 0,popUpManager:new Qv(new Mv(e))}},hostClasses:{"vira-dropdown-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>k`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${Cr["vira-focus-outline-color"].name}: ${Qt["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Ht};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${ct["vira-form-input-radius"].value};
            transition: border-radius
                ${ht["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${Za({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(180deg);
            transition: ${ht["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(0);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${Qt["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${qn};
            border-radius: inherit;
            background-color: ${Qt["vira-form-background-color"].value};
            color: ${Qt["vira-form-foreground-color"].value};
        }

        .open-upwards ${$s} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${i0.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${Fi}
            pointer-events: auto;
        }

        ${e["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
            left: 0;
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,events:{selectedChange:pt(),openChange:pt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:s,events:i}){e.popUpManager.listen(v0,()=>{if(t({showPopUpResult:void 0}),!n.isDisabled){const o=r.shadowRoot.querySelector(".dropdown-wrapper");ar.instanceOf(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),e.popUpManager.listen(b0,o=>{const a=o.detail.x,u=n.options[a];if(!u)throw new Error(`Found no dropdown option at index '${a}'`);n.isMultiSelect||Mc({emitEvent:!0,open:!1},{dispatch:l=>{s(new i.openChange(l))},host:r,popUpManager:e.popUpManager,updateState:t}),s(new i.selectedChange(Nc(u.id,n.selected,!!n.isMultiSelect)))})},render({dispatch:e,events:t,state:r,inputs:n,updateState:s,host:i}){eb(n.options);function o(y){Mc(y,{dispatch:w=>{e(new t.openChange(w))},host:i,popUpManager:r.popUpManager,updateState:s})}n.isDisabled?o({open:!1,emitEvent:!1}):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?o({emitEvent:!1,open:!1}):n.z_debug_forceOpenState&&!r.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=Xv(n),u=n.icon?v`
                  <${P.assign({icon:n.icon})}
                      ${Cn(ks.icon)}
                  ></${P}>
              `:z,l=r.showPopUpResult?r.showPopUpResult.popDown?k`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                  `:k`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                  `:void 0;function c(){o({emitEvent:!0,open:!r.showPopUpResult})}const f=!a.length,m=n.selectionPrefix&&!f?v`
                      <span class="selected-label-prefix" ${Cn(ks.prefix)}>
                          ${n.selectionPrefix}
                      </span>
                  `:z,p=f?n.placeholder||"":a.map(y=>y.label).join(", ");return v`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${Wn({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                ${Cn(ks.trigger)}
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${Y("keydown",y=>{!r.showPopUpResult&&y.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${Y("click",y=>{y.detail===0&&c()})}
                ${Y("mousedown",y=>{y.button===0&&c()})}
            >
                <div class="dropdown-trigger">
                    ${u}
                    <span
                        class="selection-display ${Wn({"using-placeholder":f})}"
                        title=${Nt(f?p:void 0)}
                    >
                        ${m} ${p}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${P.assign({icon:h0})}
                            class="trigger-icon"
                        ></${P}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${l}>
                    ${Le(!!r.showPopUpResult,v`
                            <${$s.assign({options:n.options,selectedOptions:a,navController:r.popUpManager.navController})}
                                ${Y($s.events.selectionChange,y=>{n.isMultiSelect||o({emitEvent:!0,open:!1}),e(new t.selectedChange(Nc(y.detail.id,n.selected,!!n.isMultiSelect)))})}
                                ${Cn(ks.options)}
                            ></${$s}>
                        `)}
                </div>
            </button>
        `}}),le=qa()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>k`
        span {
            text-decoration: inherit;
            white-space: inherit;
        }

        .bold-wrapper {
            position: relative;
        }

        .everything-wrapper {
            width: 100%;
        }

        .bold {
            font-weight: ${t["vira-bold-bold-weight"].value};
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }

        .normal {
            position: absolute;
            top: 0;
            left: 0;
        }

        ${e["vira-bold-bold"].selector} .normal {
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }
        ${e["vira-bold-bold"].selector} .bold {
            visibility: visible;
            pointer-events: unset;
            z-index: unset;
        }
    `,render({inputs:e}){return v`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}});var D0=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(D0||{});const ye=Ut()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>k`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${qn};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Cr["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${Fi};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Ht};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${ct["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${ht["vira-interaction-animation-duration"].value},
                background-color
                    ${ht["vira-interaction-animation-duration"].value},
                border-color ${ht["vira-interaction-animation-duration"].value};
        }

        ${Za({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${P} + .text-template {
            margin-left: 8px;
        }
    `,render:({inputs:e})=>{const t=e.icon?v`
                  <${P.assign({icon:e.icon})}></${P}>
              `:z,r=e.text?v`
                  <span class="text-template">${e.text}</span>
              `:z;return v`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}}),$t=Ut()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Ht};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${ht["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:pt()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:s,inputs:i}){const o=i.expanded?k`
                  height: ${e.contentHeight}px;
              `:k`
                  height: 0;
              `;return v`
            <button
                class="header-wrapper"
                ${Y("click",()=>{n(new s.expandChange(!i.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${zh(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),zt=Ut()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:pt(),imageError:pt()},styles:({hostClasses:e})=>k`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,render({inputs:e,state:t,updateState:r,dispatch:n,events:s,slotNames:i}){const o=e.imageUrl,a=t.erroredUrls[o]?v`
                  <slot class="status-wrapper" name=${i.error}>
                      <${P.assign({icon:ti})} class="error"></${P}>
                  </slot>
              `:t.loadedUrls[o]?void 0:v`
                    <slot class="status-wrapper" name=${i.loading}>
                        <${P.assign({icon:Kn})}></${P}>
                    </slot>
                `;return v`
            ${Le(!!a,a)}
            <img
                class=${Wn({hidden:!!a})}
                ${Y("load",async()=>{e._debugLoadDelay&&await Pn(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[o]:!0}}),n(new s.imageLoad)})}
                ${Y("error",async u=>{e._debugLoadDelay&&await Pn(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[o]:!0}}),n(new s.imageError(u.error))})}
                src=${o}
            />
        `}});function na({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>na({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function tb({value:e,allowed:t,blocked:r}){const n=t?na({input:e,matcher:t}):!0,s=r?na({input:e,matcher:r}):!1;return n&&!s}function sa(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,s)=>(tb({...e,value:s})?n.filtered.push(s):n.blocked.push(s),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function rb({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:s}){const i=$n(r,HTMLInputElement),o=E.hasKey(r,"data")&&Ng.isString(r.data)||"";if(o){const{blocked:u}=sa({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=sa({value:i.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;i.value!==a&&(i.value=a),t!==a&&s(a)}var ia=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(ia||{});const ue=Ut()({tagName:"vira-input",cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":Cr["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>k`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Cr["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Fi};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${Ht};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${qn};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Ht};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${ct["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${ht["vira-interaction-animation-duration"].value};
            }

            .input-wrapper {
                ${Ht};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${ct["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Za({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Ht};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${qn};
            }

            button {
                ${Ht};
                cursor: pointer;
                display: flex;
                transition: color
                    ${ht["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${t["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${t["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${t["vira-input-show-password-button-active-color"].value};
            }
        `,events:{valueChange:pt(),inputBlocked:pt()},state(){return{forcedInputWidth:0,showPassword:!1}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},render:({inputs:e,dispatch:t,state:r,updateState:n,events:s,host:i})=>{const{filtered:o}=sa({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?v`
                  <${P.assign({icon:e.icon})} class="left-side-icon"></${P}>
              `:z,u=e.fitText?k`
                  width: ${r.forcedInputWidth}px;
              `:z,l=e.disableBrowserHelps||e.type==="password";return v`
            <span
                class="input-wrapper"
                ${Y("mouseup",()=>{Gr.instanceOf(i.shadowRoot.querySelector("input"),HTMLInputElement).focus()})}
            >
                ${a}
                ${Le(!!e.fitText,v`
                        <span
                            class="size-span"
                            ${zh(({contentRect:c})=>{n({forcedInputWidth:c.width})})}
                        >
                            <pre>${o||e.placeholder||z}</pre>
                        </span>
                    `)}
                <input
                    type=${nb(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${Nt(l?"off":void 0)}
                    autocorrect=${Nt(l?"off":void 0)}
                    autocapitalize=${Nt(l?"off":void 0)}
                    spellcheck=${Nt(l?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${o}
                    ${Y("input",c=>{rb({inputs:e,previousValue:o,event:c,inputBlockedCallback(f){t(new s.inputBlocked(f))},newValueCallback(f){t(new s.valueChange(f))}})})}
                    placeholder=${Nt(e.placeholder||void 0)}
                    ${e.attributePassthrough?kw(e.attributePassthrough):z}
                />
                ${Le(!!(e.showClearButton&&e.value),v`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${Y("click",c=>{c.stopImmediatePropagation(),c.preventDefault(),t(new s.valueChange(""))})}
                        >
                            <${P.assign({icon:m0})}></${P}>
                        </button>
                    `)}
                ${Le(e.type==="password",v`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${Y("click",c=>{c.stopImmediatePropagation(),c.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${P.assign({icon:r.showPassword?y0:g0})}></${P}>
                        </button>
                    `)}
                ${Le(!!e.suffix,v`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style wrapper-border"></div>
            </span>
        `}});function nb(e,t){return e==="password"&&t?"text":e||"text"}const Ss=Ut()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>k`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,render({inputs:e}){function t(r){if(!e.route)return;const n=e.route.router.setRouteOnDirectNavigation(e.route.route,r);e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:n?"instant":"smooth"})}if(e.link?.newTab)return v`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label=${Nt(e.aria?.label||void 0)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return v`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    aria-label=${Nt(e.aria?.label||void 0)}
                    ${Y("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),{defineElement:nt}=Kh(),He=nt()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>k`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const r=e.router?.createRouteUrl({...e.route})??"#";return v`
            <a
                href=${r}
                ${Y("click",n=>{(!e.router||n0(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new ei(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function sb(e,t){return e.entry.entryType===Ce.Root?!1:e.entry.entryType===Ce.Page||E.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:E.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const Ft=nt()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Z["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Z["element-book-nav-hover-background-color"].value};
            color: ${Z["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Z["element-book-nav-active-background-color"].value};
            color: ${Z["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${He.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Z["element-book-nav-selected-background-color"].value};
            color: ${Z["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${P} {
            display: inline-flex;
            color: ${Z["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!sb(r,e.selectedPath))return;const n=k`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return v`
                <li style=${n}>
                    <${He.assign({router:e.router,route:{paths:[ut.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Wn({"title-row":!0,selected:e.selectedPath?E.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Le(Ur(r,Ce.ElementExample),v`
                                    <${P.assign({icon:p0})}></${P}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${He}>
                </li>
            `});return v`
            <${He.assign({route:Yr,router:e.router})}>
                <slot name=${Pt.NavHeader}>Book</slot>
            </${He}>
            <ul>
                ${t}
            </ul>
        `}});async function ib(e){await ta(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await jw(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const or=nt()({tagName:"book-error",styles:k`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,render({inputs:e}){return(E.isArray(e.message)?e.message:[e.message]).map(r=>v`
                <p>${r}</p>
            `)}}),Gn=nt()({tagName:"book-page-controls",events:{controlValueChange:pt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${ue} {
            height: 24px;
            max-width: 128px;
        }

        ${P}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,s],i)=>{if(s.controlType===K.Hidden)return"";const o=ob(e.currentValues[n],s,a=>{const u=E.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[n]:a}}))});return v`
                    <div class="control-wrapper">
                        ${Le(i===0,v`
                                <${P.assign({icon:Ja})}
                                    class="options-icon"
                                ></${P}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${o}
                        </label>
                    </div>
                `}):""}});function ob(e,t,r){return xr(t,K.Hidden)?"":xr(t,K.Checkbox)?v`
            <input
                type="checkbox"
                ?checked=${e}
                ${Y("input",n=>{const s=$n(n,HTMLInputElement);r(s.checked)})}
            />
        `:xr(t,K.Color)?v`
            <input
                type="color"
                .value=${e}
                ${Y("input",n=>{const s=$n(n,HTMLInputElement);r(s.value)})}
            />
        `:xr(t,K.Text)?v`
            <${ue.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${Y(ue.events.valueChange,n=>{r(n.detail)})}
            ></${ue}>
        `:xr(t,K.Number)?v`
            <input
                type="number"
                .value=${e}
                ${Y("input",n=>{const s=$n(n,HTMLInputElement);r(s.value)})}
            />
        `:xr(t,K.Dropdown)?v`
            <select
                .value=${e}
                ${Y("input",n=>{const s=$n(n,HTMLSelectElement);r(s.value)})}
            >
                ${t.options.map(n=>v`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:v`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Bc=nt()({tagName:"book-breadcrumbs",styles:k`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,s)=>{const i=n>=s.length-1,o=s.slice(0,n+1),a=i?"":v`
                      <span class="spacer">&gt;</span>
                  `;return v`
                <${He.assign({route:{hash:void 0,search:void 0,paths:[ut.Book,...o]},router:e.router})}>
                    ${r}
                </${He}>
                ${a}
            `}):v`
                &nbsp;
            `}}),wo=nt()({tagName:"book-breadcrumbs-bar",styles:k`
        :host {
            border-bottom: 1px solid
                ${Z["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Z["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return v`
            ${Le(!!e.currentSearch,v`
                    &nbsp;
                `,v`
                    <${Bc.assign({currentRoute:e.currentRoute,router:e.router})}></${Bc}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${Y("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const s=n.value;await Pn({milliseconds:200}),n.value===s&&(n.value?t(new ei({paths:[ut.Search,encodeURIComponent(n.value)]})):t(new ei(Yr)))})}
            />
        `}}),Pc=nt()({tagName:"book-entry-description",styles:k`
        :host {
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Z["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>v`
                <p>${t}</p>
            `)}}),Ic=nt()({tagName:"book-page-wrapper",styles:k`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${He} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?v`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:v`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[ut.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?kd(e.pageNode.entry.errors):void 0;return n&&console.error(n),v`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${He.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${He}>
                    ${n?v`
                              <${or.assign({message:n.message})}></${or}>
                          `:v`
                              <${Pc.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${Pc}>
                              <${Gn.assign({config:e.pageNode.entry.controls,currentValues:Da(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Gn}>
                          `}
                </div>
            </div>
        `}}),Fs=nt()({tagName:"book-element-example-controls",styles:k`
        :host {
            display: flex;
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[ut.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return v`
            <${He.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${He}>
        `}}),Rc=Symbol("unset-internal-state"),Lc=nt()({tagName:"book-element-example-viewer",state(){return{isUnset:Rc}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw kd(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===Rc&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return v`
                ${Le(!!t.elementExampleNode.entry.styles,v`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",Oe(n)),console.error(n),v`
                <${or.assign({message:`${t.elementExampleNode.entry.title} failed: ${Oe(n)}`})}></${or}>
            `}},options:{allowPolymorphicState:!0}}),Oc=nt()({tagName:"book-element-example-wrapper",styles:k`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${Fs} {
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Fs} {
            color: ${Z["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return v`
            <div class="individual-example-wrapper">
                <${Fs.assign(Zg(e,["currentPageControls"]))}></${Fs}>
                <${Lc.assign(e)}></${Lc}>
            </div>
        `}});function E0(e,t,r,n){const s=Lo(r,n),i=[];if(s){const o=E0(e,t,s,n);o&&i.push(o)}if(Ur(r,Ce.Page)&&!e.includes(r)){const o=Da(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:o,breadcrumbs:Te(o,()=>r.fullUrlBreadcrumbs)})}return i.reduce((o,a)=>({config:{...o.config,...a.config},current:{...o.current,...a.current},breadcrumbs:{...o.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function ab({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:s,originalTree:i}){if(!e.length&&n)return[v`
                No results
            `];const o=E.isLengthAtLeast(e,1)?E0(e,s,e[0],i):void 0,a=o&&Object.values(o.config).length&&E.isLengthAtLeast(e,1)?v`
                  <${Gn.assign({config:o.config,currentValues:o.current,fullUrlBreadcrumbs:o.breadcrumbs})}></${Gn}>
              `:z,u=Aw(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(Ur(l,Ce.Page))return v`
                    <${Ic.assign({isTopLevel:t,pageNode:l,controls:s,router:r})}
                        class="block-entry"
                    ></${Ic}>
                `;if(Ur(l,Ce.ElementExample)){const c=Da(s,l.fullUrlBreadcrumbs.slice(0,-1));return v`
                    <${Oc.assign({elementExampleNode:l,currentPageControls:c,router:r})}
                        class="inline-entry"
                    ></${Oc}>
                `}else return Ur(l,Ce.Root)?z:v`
                    <${or.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${or}>
                `});return[a,u]}const Pr=nt()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:k`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${wo} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${ht["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:pt()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:s})=>{const i=Oo(e.currentRoute.paths),o=ab({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return v`
            <${wo.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${wo}>

            ${Le(e.showLoading,v`
                    <div
                        ${vc(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${P.assign({icon:Kn})}></${P}>
                    </div>
                    ${Le(!!n.lastElement,v`
                            ${n.lastElement}
                            <slot name=${Pt.Footer}></slot>
                        `)}
                `,v`
                    <div
                        ${vc(a=>{s({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot name=${Pt.Footer}></slot>
                `)}
        `}});function ub(e,t,r){const n=_c(e,t);return n.length?n:(r(Yr),_c(e,Yr.paths))}function _c(e,t){return e.filter(r=>i1({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const vo=qa()({tagName:"element-book-app",state(){return{currentRoute:Yr,router:void 0,loading:!0,colors:{config:void 0,theme:bc(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:pt()},styles:k`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Z["element-book-page-background-color"].value};
            color: ${Z["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${Pr} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Ft} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await Vc(e,Oo(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:s,events:i})=>{t._debug&&console.info("rendering element-book app");function o(c){return{...e.currentRoute,...c}}function a(c){const f=o(c);return!E.jsonEquals(e.currentRoute,f)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(E.isTruthy).join(" - "))}function l(c){if(!a(c))return;const f=o(c);e.router?e.router.setRoute(f):n({currentRoute:{...e.currentRoute,...f}}),t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&s(new i.pathUpdate(f.paths))}try{if(t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const D=lv(t.internalRouterConfig.basePath);n({router:D}),D.listen(!0,S=>{n({currentRoute:S})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!E.jsonEquals(c,e.colors.config)){const D=bc(c);n({colors:{config:c,theme:D}}),O1(r,D)}const f=t._debug??!1,m=c1({entries:t.pages,debug:f});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:Rd(m.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const p=Oo(e.currentRoute.paths),w=(p?Jw({flattenedNodes:m.flattenedNodes,searchQuery:p}):void 0)??ub(m.flattenedNodes,e.currentRoute.paths,l);u(w[0]?.entry.title);const A=e.treeBasedControls?.controls;return A?(t._debug&&console.info({currentControls:A}),v`
                <div
                    class="root"
                    ${Y(ei,async D=>{const S=D.detail;if(!a(S))return;if(n({loading:!0}),l(S),!(r.shadowRoot.querySelector(Ft.tagName)instanceof Ft))throw new TypeError(`Failed to find child '${Ft.tagName}'`);await Vc(r,p,e.currentRoute)})}
                    ${Y(Gn.events.controlValueChange,D=>{if(!e.treeBasedControls)return;const S=d1(A,D.detail.fullUrlBreadcrumbs,D.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:S}})})}
                >
                    <${Ft.assign({flattenedNodes:m.flattenedNodes,router:e.router,selectedPath:p?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Pt.NavHeader}
                            slot=${Pt.NavHeader}
                        ></slot>
                    </${Ft}>
                    <${Pr.assign({controls:A,currentNodes:w,currentRoute:e.currentRoute,debug:f,originalTree:m.tree,router:e.router,showLoading:e.loading})}
                        ${Y(Pr.events.loadingRender,async D=>{await ta();const S=r.shadowRoot.querySelector(Pr.tagName);S?S.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Pr.tagName}' for scrolling.`),await ta(),n({loading:!D.detail})})}
                    >
                        <slot
                            name=${Pt.Footer}
                            slot=${Pt.Footer}
                        ></slot>
                    </${Pr}>
                </div>
            `):v`
                    <${or.assign({message:"Failed to generate page controls."})}></${or}>
                `}catch(c){return console.error(c),v`
                <p class="error">${Oe(c)}</p>
            `}}});async function Vc(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(Ft.tagName);if(!(n instanceof Ft))throw new TypeError(`Failed to find child '${Ft.tagName}'`);await ib(n)}const Wt=tt({title:"Elements",parent:void 0}),Ha=tt({parent:Wt,title:"Dropdown"}),lb=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:v`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:k`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:k`
            ${Bt} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],cb=tt({title:Bt.tagName,parent:Ha,controls:{Selected:{controlType:K.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:K.Text,initValue:""}},defineExamples({defineExample:e}){lb.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?v`
                            <${Bt.assign(n)}>
                                ${t.customTemplate}
                            </${Bt}>
                        `:v`
                            <${Bt.assign(n)}></${Bt}>
                        `}})})}}),Mn=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],fb=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Mn,{id:42,label:"custom template",template:v`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Mn,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:k`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:k`
            ${kn} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:It}}],db=tt({title:kn.tagName,parent:Ha,controls:{Selected:{controlType:K.Dropdown,initValue:"",options:["",...Mn.map(e=>e.label)]},Prefix:{controlType:K.Text,initValue:""},"Force State":{controlType:K.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:K.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:K.Dropdown,initValue:"",options:["",...Object.keys(ra)]},Disabled:{controlType:K.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:K.Text,initValue:"Select something"}},defineExamples({defineExample:e}){fb.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:s}){const i={placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:s.Placeholder,options:t.inputs?.options||Mn,selected:s.Selected?[Mn.find(o=>o.label===s.Selected)?.id].filter(E.isTruthy):r.selected,selectionPrefix:s.Prefix||t.inputs?.selectionPrefix,isDisabled:s.Disabled?s.Disabled==="all":t.inputs?.isDisabled,icon:s.Icon?ra[s.Icon]:t.inputs?.icon,isMultiSelect:s["Multi Select"]?s["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:s["Force State"]?s["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return v`
                        <${kn.assign(i)}
                            ${Y(kn.events.selectedChange,o=>{n({selected:o.detail})})}
                        ></${kn}>
                    `}})})}}),hb=tt({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:K.Color,initValue:""},"Fill Color":{controlType:K.Color,initValue:""},"Stroke Width":{controlType:K.Number,initValue:1}},defineExamples({defineExample:e}){Object.values(ra).forEach(t=>{e({title:t.name,styles:k`
                    :host(:hover) ${P} {
                        background-color: #f2f2f2;
                    }

                    ${P} {
                        padding: 8px;
                        border-radius: ${ct["vira-form-input-radius"].value};
                    }
                `,render({controls:r}){const n=k`
                        ${C["vira-icon-fill-color"].name}: ${he(r["Fill Color"]||"inherit")};
                        ${C["vira-icon-stroke-color"].name}: ${he(r["Stroke Color"]||"inherit")};
                        ${C["vira-icon-stroke-width"].name}: ${he(r["Stroke Width"]?Sd(r["Stroke Width"]):"inherit")};
                    `;return v`
                        <${P.assign({icon:t})} style=${n}></${P}>
                    `}})})}}),mb=tt({parent:Wt,title:le.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:K.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return v`
                    <${le.assign({text:"Text here",bold:!1})}></${le}>
                `}}),e({title:"Bold",render(){return v`
                    <${le.assign({text:"Text here",bold:!0})}></${le}>
                `}}),e({title:"Dynamic",render({controls:t}){return v`
                    <${le.assign({text:"Text here",bold:t.bolded})}></${le}>
                `}}),e({title:"Resized",styles:k`
                ${le} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return v`
                    <${le.assign({text:"Not Bolded",bold:!1})}></${le}>
                    <${le.assign({text:"Bolded",bold:!0})}></${le}>
                `}}),e({title:"Alignment",styles:k`
                ${le} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return v`
                    <${le.assign({text:"Not Bolded",bold:!1})}></${le}>
                    <${le.assign({text:"Bolded",bold:!0})}></${le}>
                `}}),e({title:"Stylized",styles:k`
                ${le} {
                    text-decoration: underline;
                }
            `,render(){return v`
                    <${le.assign({text:"Not Bolded",bold:!1})}></${le}>
                    <${le.assign({text:"Bolded",bold:!0})}></${le}>
                `}})}}),pb=tt({parent:Wt,title:ye.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:K.Color,initValue:ye.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:K.Color,initValue:ye.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:K.Color,initValue:ye.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:K.Color,initValue:ye.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:s}){const i=n??k``;e({title:r,styles:i,render({controls:o}){const a=k`
                        ${ye.cssVars["vira-button-primary-color"].name}: ${he(o["Primary color"]||"inherit")};
                        ${ye.cssVars["vira-button-secondary-color"].name}: ${he(o["Secondary color"]||"inherit")};
                        ${ye.cssVars["vira-button-primary-hover-color"].name}: ${he(o["Hover color"]||"inherit")};
                        ${ye.cssVars["vira-button-primary-active-color"].name}: ${he(o["Active color"]||"inherit")};
                    `;return v`
                        <${ye.assign({text:"hello",...s})}
                            style=${a}
                        ></${ye}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Ja}}),t({title:"outline",inputs:{buttonStyle:D0.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:k`
                ${ye} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:k`
                ${ye} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:k`
                :host {
                    ${ye.cssVars["vira-button-primary-color"].name}: pink;
                    ${ye.cssVars["vira-button-secondary-color"].name}: purple;
                    ${ye.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${ye.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return v`
                    <${ye.assign({text:"hello"})}></${ye}>
                `}})}}),gb=tt({title:$t.tagName,parent:Wt,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:k`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,s)=>v`
                        <${$t.assign({expanded:!!r.expandedStates[s]})}
                            ${Y($t.events.expandChange,i=>{const o=[...r.expandedStates];o[s]=i.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${$t.slotNames.header}
                            >
                                Section ${s}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${Y("click",()=>{const i=[...r.showMoreStates];i[s]=!i[s],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${Le(!!r.showMoreStates[s],v`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${$t}>
                    `)}}),e({title:"wider examples",styles:k`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,s)=>v`
                        <${$t.assign({expanded:!!r.expandedStates[s]})}
                            ${Y($t.events.expandChange,i=>{const o=[...r.expandedStates];o[s]=i.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${$t.slotNames.header}
                            >
                                Section ${s}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${Y("click",()=>{const i=[...r.showMoreStates];i[s]=!i[s],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${Le(!!r.showMoreStates[s],v`
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                `)}
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                        </${$t}>
                    `)}})}}),yb=tt({title:P.tagName,parent:Wt,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${P.assign({icon:It})}></${P}>
                `}}),e({title:"using createColoredIcon",render(){return v`
                    <${P.assign({icon:Sc(It,{"vira-icon-stroke-color":"red"})})}></${P}>
                `}}),e({title:"fit container",styles:k`
                ${P} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return v`
                    <${P.assign({icon:Sc(It,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${P}>
                `}})}}),wb=tt({title:zt.tagName,parent:Wt,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/element-vir/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:k`
                    border-radius: 32px;
                `,loadingSlot:v`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${P.assign({icon:Kn,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:k`
                    border-radius: 32px;
                `,errorSlot:v`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${P.assign({icon:ti,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:k`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:k`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:k`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:v`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${P.assign({icon:Kn,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `,errorSlot:v`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${P.assign({icon:ti,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:k`
                    ${zt} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||k``}
                    }

                    ${r.allowReload?k`
                              ${zt} {
                                  cursor: pointer;
                              }

                              ${zt}:hover {
                                  border-color: #0055ff;
                              }
                          `:k``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,state(){return{imageUrl:r.inputs.imageUrl}},render({state:n,updateState:s}){return v`
                        <${zt.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${Y("click",()=>{r.allowReload&&s({imageUrl:`${r.inputs.imageUrl}?di=${$d()}`})})}
                        >
                            ${r.loadingSlot?v`
                                      <div class="slot-wrapper" slot=${zt.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:z}${r.errorSlot?v`
                                      <div class="slot-wrapper" slot=${zt.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:z}
                        </${zt}>
                    `}})})}}),vb=tt({title:ue.tagName,parent:Wt,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:K.Color,initValue:ue.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:K.Color,initValue:ue.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:K.Color,initValue:ue.cssVars["vira-input-border-color"].default},"Focus color":{controlType:K.Color,initValue:ue.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:K.Color,initValue:ue.cssVars["vira-input-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:s,inputs:i}){e({title:s,styles:k`
                    ${n||k``}
                `,state(){return{value:i.value}},render({state:o,updateState:a,controls:u}){const l={[String(ue.cssVars["vira-input-text-color"].name)]:u["Text color"],[String(ue.cssVars["vira-input-placeholder-color"].name)]:u["Placeholder color"],[String(ue.cssVars["vira-input-border-color"].name)]:u["Border color"],[String(ue.cssVars["vira-input-focus-border-color"].name)]:u["Focus color"],[String(ue.cssVars["vira-input-text-selection-color"].name)]:u["Selection color"]},c=Te(l,(m,p)=>p||"inherit"),f=Object.entries(c).map(([m,p])=>[m,p].join(": ")+";").join(`
`);return v`
                        <${ue.assign({...i,value:o.value})}
                            style=${f}
                            ${Y(ue.events.valueChange,m=>{a({value:m.detail}),console.info("changed:",m.detail)})}
                        ></${ue}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:It}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:k`
                    ${ue} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:It}},{title:"taller height",styles:k`
                    ${ue} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:It}},{title:"shorter height",styles:k`
                    ${ue} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:It}},{title:"max width",styles:k`
                    ${ue} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:k`
                    ${ue} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:ia.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:ia.Email,attributePassthrough:{autocomplete:"username"}}}].forEach(t)}}),bb=tt({title:Ss.tagName,parent:Wt,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:K.Color,initValue:""},"Hover color":{controlType:K.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:s}){const i=k`
                        ${Ss.cssVars["vira-link-hover-color"].name}: ${he(s["Hover color"]||"inherit")};
                        color: ${he(s["CSS Color"]||"inherit")};
                    `;return v`
                        <${Ss.assign(n)} style=${i}>My Link</${Ss}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),Db=[Wt,hb,Ha,mb,pb,gb,cb,db,yb,wb,vb,bb].sort((e,t)=>e.title.localeCompare(t.title));ja({tagName:"vira-book-app",styles:k`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${vo} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return v`
            <${vo.assign({internalRouterConfig:{basePath:Ka("element-vir","vira"),useInternalRouter:!0},pages:Db,themeColor:"#33ccff"})}>
                <h1 slot=${Pt.NavHeader}>Vira</h1>
            </${vo}>
        `}});
