(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var ke=(e=>(e.ElementExample="element-example",e.Page="page",e.Root="root",e))(ke||{});function X(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function H0(e){return X(e).filter(t=>isNaN(Number(t)))}function gt(e){return H0(e).map(r=>e[r])}var Q0=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,X0=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,em=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,_i={Space_Separator:Q0,ID_Start:X0,ID_Continue:em},he={isSpaceSeparator(e){return typeof e=="string"&&_i.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||_i.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||_i.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let Fo,Te,Rt,Ks,lr,bt,De,ya,Ln;var tm=function(t,r){Fo=String(t),Te="start",Rt=[],Ks=0,lr=1,bt=0,De=void 0,ya=void 0,Ln=void 0;do De=rm(),im[Te]();while(De.type!=="eof");return typeof r=="function"?To({"":Ln},"",r):Ln};function To(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let s=0;s<n.length;s++){const i=String(s),o=To(n,i,r);o===void 0?delete n[i]:Object.defineProperty(n,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(const s in n){const i=To(n,s,r);i===void 0?delete n[s]:Object.defineProperty(n,s,{value:i,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let U,O,Fn,Bt,j;function rm(){for(U="default",O="",Fn=!1,Bt=1;;){j=Wt();const e=nd[U]();if(e)return e}}function Wt(){if(Fo[Ks])return String.fromCodePoint(Fo.codePointAt(Ks))}function b(){const e=Wt();return e===`
`?(lr++,bt=0):e?bt+=e.length:bt++,e&&(Ks+=e.length),e}const nd={default(){switch(j){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":b();return;case"/":b(),U="comment";return;case void 0:return b(),re("eof")}if(he.isSpaceSeparator(j)){b();return}return nd[Te]()},comment(){switch(j){case"*":b(),U="multiLineComment";return;case"/":b(),U="singleLineComment";return}throw ne(b())},multiLineComment(){switch(j){case"*":b(),U="multiLineCommentAsterisk";return;case void 0:throw ne(b())}b()},multiLineCommentAsterisk(){switch(j){case"*":b();return;case"/":b(),U="default";return;case void 0:throw ne(b())}b(),U="multiLineComment"},singleLineComment(){switch(j){case`
`:case"\r":case"\u2028":case"\u2029":b(),U="default";return;case void 0:return b(),re("eof")}b()},value(){switch(j){case"{":case"[":return re("punctuator",b());case"n":return b(),vr("ull"),re("null",null);case"t":return b(),vr("rue"),re("boolean",!0);case"f":return b(),vr("alse"),re("boolean",!1);case"-":case"+":b()==="-"&&(Bt=-1),U="sign";return;case".":O=b(),U="decimalPointLeading";return;case"0":O=b(),U="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":O=b(),U="decimalInteger";return;case"I":return b(),vr("nfinity"),re("numeric",1/0);case"N":return b(),vr("aN"),re("numeric",NaN);case'"':case"'":Fn=b()==='"',O="",U="string";return}throw ne(b())},identifierNameStartEscape(){if(j!=="u")throw ne(b());b();const e=No();switch(e){case"$":case"_":break;default:if(!he.isIdStartChar(e))throw pu();break}O+=e,U="identifierName"},identifierName(){switch(j){case"$":case"_":case"‌":case"‍":O+=b();return;case"\\":b(),U="identifierNameEscape";return}if(he.isIdContinueChar(j)){O+=b();return}return re("identifier",O)},identifierNameEscape(){if(j!=="u")throw ne(b());b();const e=No();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!he.isIdContinueChar(e))throw pu();break}O+=e,U="identifierName"},sign(){switch(j){case".":O=b(),U="decimalPointLeading";return;case"0":O=b(),U="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":O=b(),U="decimalInteger";return;case"I":return b(),vr("nfinity"),re("numeric",Bt*(1/0));case"N":return b(),vr("aN"),re("numeric",NaN)}throw ne(b())},zero(){switch(j){case".":O+=b(),U="decimalPoint";return;case"e":case"E":O+=b(),U="decimalExponent";return;case"x":case"X":O+=b(),U="hexadecimal";return}return re("numeric",Bt*0)},decimalInteger(){switch(j){case".":O+=b(),U="decimalPoint";return;case"e":case"E":O+=b(),U="decimalExponent";return}if(he.isDigit(j)){O+=b();return}return re("numeric",Bt*Number(O))},decimalPointLeading(){if(he.isDigit(j)){O+=b(),U="decimalFraction";return}throw ne(b())},decimalPoint(){switch(j){case"e":case"E":O+=b(),U="decimalExponent";return}if(he.isDigit(j)){O+=b(),U="decimalFraction";return}return re("numeric",Bt*Number(O))},decimalFraction(){switch(j){case"e":case"E":O+=b(),U="decimalExponent";return}if(he.isDigit(j)){O+=b();return}return re("numeric",Bt*Number(O))},decimalExponent(){switch(j){case"+":case"-":O+=b(),U="decimalExponentSign";return}if(he.isDigit(j)){O+=b(),U="decimalExponentInteger";return}throw ne(b())},decimalExponentSign(){if(he.isDigit(j)){O+=b(),U="decimalExponentInteger";return}throw ne(b())},decimalExponentInteger(){if(he.isDigit(j)){O+=b();return}return re("numeric",Bt*Number(O))},hexadecimal(){if(he.isHexDigit(j)){O+=b(),U="hexadecimalInteger";return}throw ne(b())},hexadecimalInteger(){if(he.isHexDigit(j)){O+=b();return}return re("numeric",Bt*Number(O))},string(){switch(j){case"\\":b(),O+=nm();return;case'"':if(Fn)return b(),re("string",O);O+=b();return;case"'":if(!Fn)return b(),re("string",O);O+=b();return;case`
`:case"\r":throw ne(b());case"\u2028":case"\u2029":om(j);break;case void 0:throw ne(b())}O+=b()},start(){switch(j){case"{":case"[":return re("punctuator",b())}U="value"},beforePropertyName(){switch(j){case"$":case"_":O=b(),U="identifierName";return;case"\\":b(),U="identifierNameStartEscape";return;case"}":return re("punctuator",b());case'"':case"'":Fn=b()==='"',U="string";return}if(he.isIdStartChar(j)){O+=b(),U="identifierName";return}throw ne(b())},afterPropertyName(){if(j===":")return re("punctuator",b());throw ne(b())},beforePropertyValue(){U="value"},afterPropertyValue(){switch(j){case",":case"}":return re("punctuator",b())}throw ne(b())},beforeArrayValue(){if(j==="]")return re("punctuator",b());U="value"},afterArrayValue(){switch(j){case",":case"]":return re("punctuator",b())}throw ne(b())},end(){throw ne(b())}};function re(e,t){return{type:e,value:t,line:lr,column:bt}}function vr(e){for(const t of e){if(Wt()!==t)throw ne(b());b()}}function nm(){switch(Wt()){case"b":return b(),"\b";case"f":return b(),"\f";case"n":return b(),`
`;case"r":return b(),"\r";case"t":return b(),"	";case"v":return b(),"\v";case"0":if(b(),he.isDigit(Wt()))throw ne(b());return"\0";case"x":return b(),sm();case"u":return b(),No();case`
`:case"\u2028":case"\u2029":return b(),"";case"\r":return b(),Wt()===`
`&&b(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw ne(b());case void 0:throw ne(b())}return b()}function sm(){let e="",t=Wt();if(!he.isHexDigit(t)||(e+=b(),t=Wt(),!he.isHexDigit(t)))throw ne(b());return e+=b(),String.fromCodePoint(parseInt(e,16))}function No(){let e="",t=4;for(;t-- >0;){const r=Wt();if(!he.isHexDigit(r))throw ne(b());e+=b()}return String.fromCodePoint(parseInt(e,16))}const im={start(){if(De.type==="eof")throw br();Vi()},beforePropertyName(){switch(De.type){case"identifier":case"string":ya=De.value,Te="afterPropertyName";return;case"punctuator":bs();return;case"eof":throw br()}},afterPropertyName(){if(De.type==="eof")throw br();Te="beforePropertyValue"},beforePropertyValue(){if(De.type==="eof")throw br();Vi()},beforeArrayValue(){if(De.type==="eof")throw br();if(De.type==="punctuator"&&De.value==="]"){bs();return}Vi()},afterPropertyValue(){if(De.type==="eof")throw br();switch(De.value){case",":Te="beforePropertyName";return;case"}":bs()}},afterArrayValue(){if(De.type==="eof")throw br();switch(De.value){case",":Te="beforeArrayValue";return;case"]":bs()}},end(){}};function Vi(){let e;switch(De.type){case"punctuator":switch(De.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=De.value;break}if(Ln===void 0)Ln=e;else{const t=Rt[Rt.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,ya,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")Rt.push(e),Array.isArray(e)?Te="beforeArrayValue":Te="beforePropertyName";else{const t=Rt[Rt.length-1];t==null?Te="end":Array.isArray(t)?Te="afterArrayValue":Te="afterPropertyValue"}}function bs(){Rt.pop();const e=Rt[Rt.length-1];e==null?Te="end":Array.isArray(e)?Te="afterArrayValue":Te="afterPropertyValue"}function ne(e){return Gs(e===void 0?`JSON5: invalid end of input at ${lr}:${bt}`:`JSON5: invalid character '${sd(e)}' at ${lr}:${bt}`)}function br(){return Gs(`JSON5: invalid end of input at ${lr}:${bt}`)}function pu(){return bt-=5,Gs(`JSON5: invalid identifier character at ${lr}:${bt}`)}function om(e){console.warn(`JSON5: '${sd(e)}' in strings is not valid ECMAScript; consider escaping`)}function sd(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Gs(e){const t=new SyntaxError(e);return t.lineNumber=lr,t.columnNumber=bt,t}var am=function(t,r,n){const s=[];let i="",o,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){o=[];for(const w of r){let A;typeof w=="string"?A=w:(typeof w=="number"||w instanceof String||w instanceof Number)&&(A=String(w)),A!==void 0&&o.indexOf(A)<0&&o.push(A)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),c("",{"":t});function c(w,A){let D=A[w];switch(D!=null&&(typeof D.toJSON5=="function"?D=D.toJSON5(w):typeof D.toJSON=="function"&&(D=D.toJSON(w))),a&&(D=a.call(A,w,D)),D instanceof Number?D=Number(D):D instanceof String?D=String(D):D instanceof Boolean&&(D=D.valueOf()),D){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof D=="string")return d(D);if(typeof D=="number")return String(D);if(typeof D=="object")return Array.isArray(D)?v(D):m(D)}function d(w){const A={"'":.1,'"':.2},D={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let S="";for(let L=0;L<w.length;L++){const z=w[L];switch(z){case"'":case'"':A[z]++,S+=z;continue;case"\0":if(he.isDigit(w[L+1])){S+="\\x00";continue}}if(D[z]){S+=D[z];continue}if(z<" "){let Se=z.charCodeAt(0).toString(16);S+="\\x"+("00"+Se).substring(Se.length);continue}S+=z}const M=l||Object.keys(A).reduce((L,z)=>A[L]<A[z]?L:z);return S=S.replace(new RegExp(M,"g"),D[M]),M+S+M}function m(w){if(s.indexOf(w)>=0)throw TypeError("Converting circular structure to JSON5");s.push(w);let A=i;i=i+u;let D=o||Object.keys(w),S=[];for(const L of D){const z=c(L,w);if(z!==void 0){let Se=p(L)+":";u!==""&&(Se+=" "),Se+=z,S.push(Se)}}let M;if(S.length===0)M="{}";else{let L;if(u==="")L=S.join(","),M="{"+L+"}";else{let z=`,
`+i;L=S.join(z),M=`{
`+i+L+`,
`+A+"}"}}return s.pop(),i=A,M}function p(w){if(w.length===0)return d(w);const A=String.fromCodePoint(w.codePointAt(0));if(!he.isIdStartChar(A))return d(w);for(let D=A.length;D<w.length;D++)if(!he.isIdContinueChar(String.fromCodePoint(w.codePointAt(D))))return d(w);return w}function v(w){if(s.indexOf(w)>=0)throw TypeError("Converting circular structure to JSON5");s.push(w);let A=i;i=i+u;let D=[];for(let M=0;M<w.length;M++){const L=c(String(M),w);D.push(L!==void 0?L:"null")}let S;if(D.length===0)S="[]";else if(u==="")S="["+D.join(",")+"]";else{let M=`,
`+i,L=D.join(M);S=`[
`+i+L+`,
`+A+"]"}return s.pop(),i=A,S}};const um={parse:tm,stringify:am};var lm=um;function h(e){try{return lm.stringify(e)}catch{return String(e)}}const cm=[".",":",";",",","?","!"],dm=new RegExp(`[${cm.join("")}]+$`);function gu(e){return e.replace(dm,"")}function Ie(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:h(e):""}function di(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(n=>n&&gu(n));return t.length===1?t[0]:t.length?t.map((n,s)=>s===t.length-1?n:gu(n)).join(": "):""}function ze(e){return e instanceof Error?e:new Error(Ie(e))}function fi(e,t){const r=ze(e),n=di(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var g;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(g||(g={}));var F;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(F||(F={}));F.ClientError,F.ServerError;g.Continue+"",F.Information,g.SwitchingProtocols+"",F.Information,g.Processing+"",F.Information,g.EarlyHints+"",F.Information,g.Ok+"",F.Success,g.Created+"",F.Success,g.Accepted+"",F.Success,g.NonAuthoritativeInformation+"",F.Success,g.NoContent+"",F.Success,g.ResetContent+"",F.Success,g.PartialContent+"",F.Success,g.MultiStatus+"",F.Success,g.AlreadyReported+"",F.Success,g.ImUsed+"",F.Success,g.MultipleChoices+"",F.Redirect,g.MovedPermanently+"",F.Redirect,g.Found+"",F.Redirect,g.SeeOther+"",F.Redirect,g.NotModified+"",F.Redirect,g.UseProxy+"",F.Redirect,g.Unused+"",F.Redirect,g.TemporaryRedirect+"",F.Redirect,g.PermanentRedirect+"",F.Redirect,g.BadRequest+"",F.ClientError,g.Unauthorized+"",F.ClientError,g.PaymentRequired+"",F.ClientError,g.Forbidden+"",F.ClientError,g.NotFound+"",F.ClientError,g.MethodNotAllowed+"",F.ClientError,g.NotAcceptable+"",F.ClientError,g.ProxyAuthenticationRequired+"",F.ClientError,g.RequestTimeout+"",F.ClientError,g.Conflict+"",F.ClientError,g.Gone+"",F.ClientError,g.LengthRequired+"",F.ClientError,g.PreconditionFailed+"",F.ClientError,g.PayloadTooLarge+"",F.ClientError,g.UriTooLong+"",F.ClientError,g.UnsupportedMediaType+"",F.ClientError,g.RangeNotSatisfiable+"",F.ClientError,g.ExpectationFailed+"",F.ClientError,g.ImATeapot+"",F.ClientError,g.MisdirectedRequest+"",F.ClientError,g.UnprocessableContent+"",F.ClientError,g.Locked+"",F.ClientError,g.FailedDependency+"",F.ClientError,g.TooEarly+"",F.ClientError,g.UpgradeRequired+"",F.ClientError,g.PreconditionRequired+"",F.ClientError,g.TooManyRequests+"",F.ClientError,g.RequestHeaderFieldsTooLarge+"",F.ClientError,g.UnavailableForLegalReasons+"",F.ClientError,g.InternalServerError+"",F.ServerError,g.NotImplemented+"",F.ServerError,g.BadGateway+"",F.ServerError,g.ServiceUnavailable+"",F.ServerError,g.GatewayTimeout+"",F.ServerError,g.HttpVersionNotSupported+"",F.ServerError,g.VariantAlsoNegotiates+"",F.ServerError,g.InsufficientStorage+"",F.ServerError,g.LoopDetected+"",F.ServerError,g.NotExtended+"",F.ServerError,g.NetworkAuthenticationRequired+"",F.ServerError;const Os={[F.Information]:[g.Continue,g.SwitchingProtocols,g.Processing,g.EarlyHints],[F.Success]:[g.Ok,g.Created,g.Accepted,g.NonAuthoritativeInformation,g.NoContent,g.ResetContent,g.PartialContent,g.MultiStatus,g.AlreadyReported,g.ImUsed],[F.Redirect]:[g.MultipleChoices,g.MovedPermanently,g.Found,g.SeeOther,g.NotModified,g.UseProxy,g.Unused,g.TemporaryRedirect,g.PermanentRedirect],[F.ClientError]:[g.BadRequest,g.Unauthorized,g.PaymentRequired,g.Forbidden,g.NotFound,g.MethodNotAllowed,g.NotAcceptable,g.ProxyAuthenticationRequired,g.RequestTimeout,g.Conflict,g.Gone,g.LengthRequired,g.PreconditionFailed,g.PayloadTooLarge,g.UriTooLong,g.UnsupportedMediaType,g.RangeNotSatisfiable,g.ExpectationFailed,g.ImATeapot,g.MisdirectedRequest,g.UnprocessableContent,g.Locked,g.FailedDependency,g.TooEarly,g.UpgradeRequired,g.PreconditionRequired,g.TooManyRequests,g.RequestHeaderFieldsTooLarge,g.UnavailableForLegalReasons],[F.ServerError]:[g.InternalServerError,g.NotImplemented,g.BadGateway,g.ServiceUnavailable,g.GatewayTimeout,g.HttpVersionNotSupported,g.VariantAlsoNegotiates,g.InsufficientStorage,g.LoopDetected,g.NotExtended,g.NetworkAuthenticationRequired]};function id({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class od{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(ze(n))}})}}class Br extends Error{}class fm extends Br{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class hm extends Br{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class mm extends Br{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class qr extends Br{}class ad extends Br{constructor(t){super(`Invalid unit ${t}`)}}class Ae extends Br{}class Ht extends Br{constructor(){super("Zone is an abstract class")}}const x="numeric",Dt="short",et="long",Zs={year:x,month:x,day:x},ud={year:x,month:Dt,day:x},pm={year:x,month:Dt,day:x,weekday:Dt},ld={year:x,month:et,day:x},cd={year:x,month:et,day:x,weekday:et},dd={hour:x,minute:x},fd={hour:x,minute:x,second:x},hd={hour:x,minute:x,second:x,timeZoneName:Dt},md={hour:x,minute:x,second:x,timeZoneName:et},pd={hour:x,minute:x,hourCycle:"h23"},gd={hour:x,minute:x,second:x,hourCycle:"h23"},yd={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:Dt},wd={hour:x,minute:x,second:x,hourCycle:"h23",timeZoneName:et},vd={year:x,month:x,day:x,hour:x,minute:x},bd={year:x,month:x,day:x,hour:x,minute:x,second:x},Dd={year:x,month:Dt,day:x,hour:x,minute:x},Ed={year:x,month:Dt,day:x,hour:x,minute:x,second:x},gm={year:x,month:Dt,day:x,weekday:Dt,hour:x,minute:x},Ad={year:x,month:et,day:x,hour:x,minute:x,timeZoneName:Dt},Cd={year:x,month:et,day:x,hour:x,minute:x,second:x,timeZoneName:Dt},$d={year:x,month:et,day:x,weekday:et,hour:x,minute:x,timeZoneName:et},kd={year:x,month:et,day:x,weekday:et,hour:x,minute:x,second:x,timeZoneName:et};class is{get type(){throw new Ht}get name(){throw new Ht}get ianaName(){return this.name}get isUniversal(){throw new Ht}offsetName(t,r){throw new Ht}formatOffset(t,r){throw new Ht}offset(t){throw new Ht}equals(t){throw new Ht}get isValid(){throw new Ht}}let Ui=null;class hi extends is{static get instance(){return Ui===null&&(Ui=new hi),Ui}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Ld(t,r,n)}formatOffset(t,r){return On(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const Mo=new Map;function ym(e){let t=Mo.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),Mo.set(e,t)),t}const wm={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function vm(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,s,i,o,a,u,l,c]=n;return[o,s,i,a,u,l,c]}function bm(e,t){const r=e.formatToParts(t),n=[];for(let s=0;s<r.length;s++){const{type:i,value:o}=r[s],a=wm[i];i==="era"?n[a]=o:R(a)||(n[a]=parseInt(o,10))}return n}const Wi=new Map;class zt extends is{static create(t){let r=Wi.get(t);return r===void 0&&Wi.set(t,r=new zt(t)),r}static resetCache(){Wi.clear(),Mo.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=zt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Ld(t,r,n,this.name)}formatOffset(t,r){return On(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=ym(this.name);let[s,i,o,a,u,l,c]=n.formatToParts?bm(n,r):vm(n,r);a==="BC"&&(s=-Math.abs(s)+1);const m=pi({year:s,month:i,day:o,hour:u===24?0:u,minute:l,second:c,millisecond:0});let p=+r;const v=p%1e3;return p-=v>=0?v:1e3+v,(m-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let yu={};function Dm(e,t={}){const r=JSON.stringify([e,t]);let n=yu[r];return n||(n=new Intl.ListFormat(e,t),yu[r]=n),n}const Bo=new Map;function Po(e,t={}){const r=JSON.stringify([e,t]);let n=Bo.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),Bo.set(r,n)),n}const Io=new Map;function Em(e,t={}){const r=JSON.stringify([e,t]);let n=Io.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),Io.set(r,n)),n}const Ro=new Map;function Am(e,t={}){const{base:r,...n}=t,s=JSON.stringify([e,n]);let i=Ro.get(s);return i===void 0&&(i=new Intl.RelativeTimeFormat(e,t),Ro.set(s,i)),i}let Tn=null;function Cm(){return Tn||(Tn=new Intl.DateTimeFormat().resolvedOptions().locale,Tn)}const Lo=new Map;function Sd(e){let t=Lo.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Lo.set(e,t)),t}const Oo=new Map;function $m(e){let t=Oo.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...xd,...t}),Oo.set(e,t)}return t}function km(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,s;try{n=Po(e).resolvedOptions(),s=e}catch{const u=e.substring(0,r);n=Po(u).resolvedOptions(),s=u}const{numberingSystem:i,calendar:o}=n;return[s,i,o]}}function Sm(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function xm(e){const t=[];for(let r=1;r<=12;r++){const n=I.utc(2009,r,1);t.push(e(n))}return t}function Fm(e){const t=[];for(let r=1;r<=7;r++){const n=I.utc(2016,11,13+r);t.push(e(n))}return t}function Ds(e,t,r,n){const s=e.listingMode();return s==="error"?null:s==="en"?r(t):n(t)}function Tm(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||Sd(e.locale).numberingSystem==="latn"}class Nm{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:s,floor:i,...o}=n;if(!r||Object.keys(o).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=Em(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):Ea(t,3);return pe(r,this.padTo)}}}class Mm{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let s;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&zt.create(a).valid?(s=a,this.dt=t):(s="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,s=t.zone.name):(s="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||s,this.dtf=Po(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Bm{constructor(t,r,n){this.opts={style:"long",...n},!r&&Id()&&(this.rtf=Am(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):tp(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const xd={firstDay:1,minimalDays:4,weekend:[6,7]};class Q{static fromOpts(t){return Q.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,s,i=!1){const o=t||oe.defaultLocale,a=o||(i?"en-US":Cm()),u=r||oe.defaultNumberingSystem,l=n||oe.defaultOutputCalendar,c=Vo(s)||oe.defaultWeekSettings;return new Q(a,u,l,c,o)}static resetCache(){Tn=null,Bo.clear(),Io.clear(),Ro.clear(),Lo.clear(),Oo.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:s}={}){return Q.create(t,r,n,s)}constructor(t,r,n,s,i){const[o,a,u]=km(t);this.locale=o,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=s,this.intl=Sm(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Tm(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Q.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Vo(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return Ds(this,t,Vd,()=>{const n=r?{month:t,day:"numeric"}:{month:t},s=r?"format":"standalone";return this.monthsCache[s][t]||(this.monthsCache[s][t]=xm(i=>this.extract(i,n,"month"))),this.monthsCache[s][t]})}weekdays(t,r=!1){return Ds(this,t,jd,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},s=r?"format":"standalone";return this.weekdaysCache[s][t]||(this.weekdaysCache[s][t]=Fm(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[s][t]})}meridiems(){return Ds(this,void 0,()=>qd,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[I.utc(2016,11,13,9),I.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Ds(this,t,zd,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[I.utc(-40,1,1),I.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const s=this.dtFormatter(t,r),i=s.formatToParts(),o=i.find(a=>a.type.toLowerCase()===n);return o?o.value:null}numberFormatter(t={}){return new Nm(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new Mm(t,this.intl,r)}relFormatter(t={}){return new Bm(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Dm(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Sd(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Rd()?$m(this.locale):xd}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let ji=null;class Ne extends is{static get utcInstance(){return ji===null&&(ji=new Ne(0)),ji}static instance(t){return t===0?Ne.utcInstance:new Ne(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new Ne(gi(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${On(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${On(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return On(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Pm extends is{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function sr(e,t){if(R(e)||e===null)return t;if(e instanceof is)return e;if(Vm(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?hi.instance:r==="utc"||r==="gmt"?Ne.utcInstance:Ne.parseSpecifier(r)||zt.create(e)}else return ar(e)?Ne.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Pm(e)}const wa={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},wu={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Im=wa.hanidec.replace(/[\[|\]]/g,"").split("");function Rm(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(wa.hanidec)!==-1)t+=Im.indexOf(e[r]);else for(const s in wu){const[i,o]=wu[s];n>=i&&n<=o&&(t+=n-i)}}return parseInt(t,10)}else return t}const _o=new Map;function Lm(){_o.clear()}function ht({numberingSystem:e},t=""){const r=e||"latn";let n=_o.get(r);n===void 0&&(n=new Map,_o.set(r,n));let s=n.get(t);return s===void 0&&(s=new RegExp(`${wa[r]}${t}`),n.set(t,s)),s}let vu=()=>Date.now(),bu="system",Du=null,Eu=null,Au=null,Cu=60,$u,ku=null;class oe{static get now(){return vu}static set now(t){vu=t}static set defaultZone(t){bu=t}static get defaultZone(){return sr(bu,hi.instance)}static get defaultLocale(){return Du}static set defaultLocale(t){Du=t}static get defaultNumberingSystem(){return Eu}static set defaultNumberingSystem(t){Eu=t}static get defaultOutputCalendar(){return Au}static set defaultOutputCalendar(t){Au=t}static get defaultWeekSettings(){return ku}static set defaultWeekSettings(t){ku=Vo(t)}static get twoDigitCutoffYear(){return Cu}static set twoDigitCutoffYear(t){Cu=t%100}static get throwOnInvalid(){return $u}static set throwOnInvalid(t){$u=t}static resetCaches(){Q.resetCache(),zt.resetCache(),I.resetCache(),Lm()}}class wt{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Fd=[0,31,59,90,120,151,181,212,243,273,304,334],Td=[0,31,60,91,121,152,182,213,244,274,305,335];function ut(e,t){return new wt("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function va(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const s=n.getUTCDay();return s===0?7:s}function Nd(e,t,r){return r+(os(e)?Td:Fd)[t-1]}function Md(e,t){const r=os(e)?Td:Fd,n=r.findIndex(i=>i<t),s=t-r[n];return{month:n+1,day:s}}function ba(e,t){return(e-t+7)%7+1}function Ys(e,t=4,r=1){const{year:n,month:s,day:i}=e,o=Nd(n,s,i),a=ba(va(n,s,i),r);let u=Math.floor((o-a+14-t)/7),l;return u<1?(l=n-1,u=Kn(l,t,r)):u>Kn(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...yi(e)}}function Su(e,t=4,r=1){const{weekYear:n,weekNumber:s,weekday:i}=e,o=ba(va(n,1,t),r),a=Gr(n);let u=s*7+i-o-7+t,l;u<1?(l=n-1,u+=Gr(l)):u>a?(l=n+1,u-=Gr(n)):l=n;const{month:c,day:d}=Md(l,u);return{year:l,month:c,day:d,...yi(e)}}function qi(e){const{year:t,month:r,day:n}=e,s=Nd(t,r,n);return{year:t,ordinal:s,...yi(e)}}function xu(e){const{year:t,ordinal:r}=e,{month:n,day:s}=Md(t,r);return{year:t,month:n,day:s,...yi(e)}}function Fu(e,t){if(!R(e.localWeekday)||!R(e.localWeekNumber)||!R(e.localWeekYear)){if(!R(e.weekday)||!R(e.weekNumber)||!R(e.weekYear))throw new qr("Cannot mix locale-based week fields with ISO-based week fields");return R(e.localWeekday)||(e.weekday=e.localWeekday),R(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),R(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Om(e,t=4,r=1){const n=mi(e.weekYear),s=lt(e.weekNumber,1,Kn(e.weekYear,t,r)),i=lt(e.weekday,1,7);return n?s?i?!1:ut("weekday",e.weekday):ut("week",e.weekNumber):ut("weekYear",e.weekYear)}function _m(e){const t=mi(e.year),r=lt(e.ordinal,1,Gr(e.year));return t?r?!1:ut("ordinal",e.ordinal):ut("year",e.year)}function Bd(e){const t=mi(e.year),r=lt(e.month,1,12),n=lt(e.day,1,Js(e.year,e.month));return t?r?n?!1:ut("day",e.day):ut("month",e.month):ut("year",e.year)}function Pd(e){const{hour:t,minute:r,second:n,millisecond:s}=e,i=lt(t,0,23)||t===24&&r===0&&n===0&&s===0,o=lt(r,0,59),a=lt(n,0,59),u=lt(s,0,999);return i?o?a?u?!1:ut("millisecond",s):ut("second",n):ut("minute",r):ut("hour",t)}function R(e){return typeof e>"u"}function ar(e){return typeof e=="number"}function mi(e){return typeof e=="number"&&e%1===0}function Vm(e){return typeof e=="string"}function Um(e){return Object.prototype.toString.call(e)==="[object Date]"}function Id(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Rd(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Wm(e){return Array.isArray(e)?e:[e]}function Tu(e,t,r){if(e.length!==0)return e.reduce((n,s)=>{const i=[t(s),s];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function jm(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function en(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Vo(e){if(e==null)return null;if(typeof e!="object")throw new Ae("Week settings must be an object");if(!lt(e.firstDay,1,7)||!lt(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!lt(t,1,7)))throw new Ae("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function lt(e,t,r){return mi(e)&&e>=t&&e<=r}function qm(e,t){return e-t*Math.floor(e/t)}function pe(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function tr(e){if(!(R(e)||e===null||e===""))return parseInt(e,10)}function Dr(e){if(!(R(e)||e===null||e===""))return parseFloat(e)}function Da(e){if(!(R(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Ea(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function os(e){return e%4===0&&(e%100!==0||e%400===0)}function Gr(e){return os(e)?366:365}function Js(e,t){const r=qm(t-1,12)+1,n=e+(t-r)/12;return r===2?os(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function pi(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Nu(e,t,r){return-ba(va(e,1,t),r)+t-1}function Kn(e,t=4,r=1){const n=Nu(e,t,r),s=Nu(e+1,t,r);return(Gr(e)-n+s)/7}function Uo(e){return e>99?e:e>oe.twoDigitCutoffYear?1900+e:2e3+e}function Ld(e,t,r,n=null){const s=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const o={timeZoneName:t,...i},a=new Intl.DateTimeFormat(r,o).formatToParts(s).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function gi(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,s=r<0||Object.is(r,-0)?-n:n;return r*60+s}function Od(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new Ae(`Invalid unit value ${e}`);return t}function Hs(e,t){const r={};for(const n in e)if(en(e,n)){const s=e[n];if(s==null)continue;r[t(n)]=Od(s)}return r}function On(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),s=e>=0?"+":"-";switch(t){case"short":return`${s}${pe(r,2)}:${pe(n,2)}`;case"narrow":return`${s}${r}${n>0?`:${n}`:""}`;case"techie":return`${s}${pe(r,2)}${pe(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function yi(e){return jm(e,["hour","minute","second","millisecond"])}const zm=["January","February","March","April","May","June","July","August","September","October","November","December"],_d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Km=["J","F","M","A","M","J","J","A","S","O","N","D"];function Vd(e){switch(e){case"narrow":return[...Km];case"short":return[..._d];case"long":return[...zm];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Ud=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Wd=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Gm=["M","T","W","T","F","S","S"];function jd(e){switch(e){case"narrow":return[...Gm];case"short":return[...Wd];case"long":return[...Ud];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const qd=["AM","PM"],Zm=["Before Christ","Anno Domini"],Ym=["BC","AD"],Jm=["B","A"];function zd(e){switch(e){case"narrow":return[...Jm];case"short":return[...Ym];case"long":return[...Zm];default:return null}}function Hm(e){return qd[e.hour<12?0:1]}function Qm(e,t){return jd(t)[e.weekday-1]}function Xm(e,t){return Vd(t)[e.month-1]}function ep(e,t){return zd(t)[e.year<0?0:1]}function tp(e,t,r="always",n=!1){const s={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&i){const d=e==="days";switch(t){case 1:return d?"tomorrow":`next ${s[e][0]}`;case-1:return d?"yesterday":`last ${s[e][0]}`;case 0:return d?"today":`this ${s[e][0]}`}}const o=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=s[e],c=n?u?l[1]:l[2]||l[1]:u?s[e][0]:e;return o?`${a} ${c} ago`:`in ${a} ${c}`}function Mu(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const rp={D:Zs,DD:ud,DDD:ld,DDDD:cd,t:dd,tt:fd,ttt:hd,tttt:md,T:pd,TT:gd,TTT:yd,TTTT:wd,f:vd,ff:Dd,fff:Ad,ffff:$d,F:bd,FF:Ed,FFF:Cd,FFFF:kd};class $e{static create(t,r={}){return new $e(t,r)}static parseFormat(t){let r=null,n="",s=!1;const i=[];for(let o=0;o<t.length;o++){const a=t.charAt(o);a==="'"?(n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),r=null,n="",s=!s):s||a===r?n+=a:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return rp[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return pe(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",s=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(p,v)=>this.loc.extract(t,p,v),o=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",a=()=>n?Hm(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(p,v)=>n?Xm(t,p):i(v?{month:p}:{month:p,day:"numeric"},"month"),l=(p,v)=>n?Qm(t,p):i(v?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),c=p=>{const v=$e.macroTokenToFormatOpts(p);return v?this.formatWithSystemDefault(t,v):p},d=p=>n?ep(t,p):i({era:p},"era"),m=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return s?i({day:"numeric"},"day"):this.num(t.day);case"dd":return s?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return s?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return s?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return s?i({month:"numeric"},"month"):this.num(t.month);case"MM":return s?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return s?i({year:"numeric"},"year"):this.num(t.year);case"yy":return s?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return s?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return s?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(p)}};return Mu($e.parseFormat(r),m)}formatDurationFromString(t,r){const n=u=>{switch(u[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},s=u=>l=>{const c=n(l);return c?this.num(u.get(c),l.length):l},i=$e.parseFormat(r),o=i.reduce((u,{literal:l,val:c})=>l?u:u.concat(c),[]),a=t.shiftTo(...o.map(n).filter(u=>u));return Mu(i,s(a))}}const Kd=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function gn(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function yn(...e){return t=>e.reduce(([r,n,s],i)=>{const[o,a,u]=i(t,s);return[{...r,...o},a||n,u]},[{},null,1]).slice(0,2)}function wn(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const s=r.exec(e);if(s)return n(s)}return[null,null]}function Gd(...e){return(t,r)=>{const n={};let s;for(s=0;s<e.length;s++)n[e[s]]=tr(t[r+s]);return[n,null,r+s]}}const Zd=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,np=`(?:${Zd.source}?(?:\\[(${Kd.source})\\])?)?`,Aa=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Yd=RegExp(`${Aa.source}${np}`),Ca=RegExp(`(?:T${Yd.source})?`),sp=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,ip=/(\d{4})-?W(\d\d)(?:-?(\d))?/,op=/(\d{4})-?(\d{3})/,ap=Gd("weekYear","weekNumber","weekDay"),up=Gd("year","ordinal"),lp=/(\d{4})-(\d\d)-(\d\d)/,Jd=RegExp(`${Aa.source} ?(?:${Zd.source}|(${Kd.source}))?`),cp=RegExp(`(?: ${Jd.source})?`);function Zr(e,t,r){const n=e[t];return R(n)?r:tr(n)}function dp(e,t){return[{year:Zr(e,t),month:Zr(e,t+1,1),day:Zr(e,t+2,1)},null,t+3]}function vn(e,t){return[{hours:Zr(e,t,0),minutes:Zr(e,t+1,0),seconds:Zr(e,t+2,0),milliseconds:Da(e[t+3])},null,t+4]}function as(e,t){const r=!e[t]&&!e[t+1],n=gi(e[t+1],e[t+2]),s=r?null:Ne.instance(n);return[{},s,t+3]}function us(e,t){const r=e[t]?zt.create(e[t]):null;return[{},r,t+1]}const fp=RegExp(`^T?${Aa.source}$`),hp=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function mp(e){const[t,r,n,s,i,o,a,u,l]=e,c=t[0]==="-",d=u&&u[0]==="-",m=(p,v=!1)=>p!==void 0&&(v||p&&c)?-p:p;return[{years:m(Dr(r)),months:m(Dr(n)),weeks:m(Dr(s)),days:m(Dr(i)),hours:m(Dr(o)),minutes:m(Dr(a)),seconds:m(Dr(u),u==="-0"),milliseconds:m(Da(l),d)}]}const pp={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function $a(e,t,r,n,s,i,o){const a={year:t.length===2?Uo(tr(t)):tr(t),month:_d.indexOf(r)+1,day:tr(n),hour:tr(s),minute:tr(i)};return o&&(a.second=tr(o)),e&&(a.weekday=e.length>3?Ud.indexOf(e)+1:Wd.indexOf(e)+1),a}const gp=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function yp(e){const[,t,r,n,s,i,o,a,u,l,c,d]=e,m=$a(t,s,n,r,i,o,a);let p;return u?p=pp[u]:l?p=0:p=gi(c,d),[m,new Ne(p)]}function wp(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const vp=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,bp=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Dp=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Bu(e){const[,t,r,n,s,i,o,a]=e;return[$a(t,s,n,r,i,o,a),Ne.utcInstance]}function Ep(e){const[,t,r,n,s,i,o,a]=e;return[$a(t,a,r,n,s,i,o),Ne.utcInstance]}const Ap=gn(sp,Ca),Cp=gn(ip,Ca),$p=gn(op,Ca),kp=gn(Yd),Hd=yn(dp,vn,as,us),Sp=yn(ap,vn,as,us),xp=yn(up,vn,as,us),Fp=yn(vn,as,us);function Tp(e){return wn(e,[Ap,Hd],[Cp,Sp],[$p,xp],[kp,Fp])}function Np(e){return wn(wp(e),[gp,yp])}function Mp(e){return wn(e,[vp,Bu],[bp,Bu],[Dp,Ep])}function Bp(e){return wn(e,[hp,mp])}const Pp=yn(vn);function Ip(e){return wn(e,[fp,Pp])}const Rp=gn(lp,cp),Lp=gn(Jd),Op=yn(vn,as,us);function _p(e){return wn(e,[Rp,Hd],[Lp,Op])}const Pu="Invalid Duration",Qd={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Vp={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Qd},it=146097/400,Pr=146097/4800,Up={years:{quarters:4,months:12,weeks:it/7,days:it,hours:it*24,minutes:it*24*60,seconds:it*24*60*60,milliseconds:it*24*60*60*1e3},quarters:{months:3,weeks:it/28,days:it/4,hours:it*24/4,minutes:it*24*60/4,seconds:it*24*60*60/4,milliseconds:it*24*60*60*1e3/4},months:{weeks:Pr/7,days:Pr,hours:Pr*24,minutes:Pr*24*60,seconds:Pr*24*60*60,milliseconds:Pr*24*60*60*1e3},...Qd},xr=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Wp=xr.slice(0).reverse();function Qt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new q(n)}function Xd(e,t){let r=t.milliseconds??0;for(const n of Wp.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function Iu(e,t){const r=Xd(e,t)<0?-1:1;xr.reduceRight((n,s)=>{if(R(t[s]))return n;if(n){const i=t[n]*r,o=e[s][n],a=Math.floor(i/o);t[s]+=a*r,t[n]-=a*o*r}return s},null),xr.reduce((n,s)=>{if(R(t[s]))return n;if(n){const i=t[n]%1;t[n]-=i,t[s]+=i*e[n][s]}return s},null)}function jp(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class q{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?Up:Vp;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Q.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return q.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new Ae(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new q({values:Hs(t,q.normalizeUnit),loc:Q.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(ar(t))return q.fromMillis(t);if(q.isDuration(t))return t;if(typeof t=="object")return q.fromObject(t);throw new Ae(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=Bp(t);return n?q.fromObject(n,r):q.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=Ip(t);return n?q.fromObject(n,r):q.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new Ae("need to specify a reason the Duration is invalid");const n=t instanceof wt?t:new wt(t,r);if(oe.throwOnInvalid)throw new mm(n);return new q({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new ad(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?$e.create(this.loc,n).formatDurationFromString(this,t):Pu}toHuman(t={}){if(!this.isValid)return Pu;const r=xr.map(n=>{const s=this.values[n];return R(s)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(s)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Ea(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},I.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Xd(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=q.fromDurationLike(t),n={};for(const s of xr)(en(r.values,s)||en(this.values,s))&&(n[s]=r.get(s)+this.get(s));return Qt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=q.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Od(t(this.values[n],n));return Qt(this,{values:r},!0)}get(t){return this[q.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Hs(t,q.normalizeUnit)};return Qt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:s}={}){const o={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:s,conversionAccuracy:n};return Qt(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Iu(this.matrix,t),Qt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=jp(this.normalize().shiftToAll().toObject());return Qt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>q.normalizeUnit(o));const r={},n={},s=this.toObject();let i;for(const o of xr)if(t.indexOf(o)>=0){i=o;let a=0;for(const l in n)a+=this.matrix[l][o]*n[l],n[l]=0;ar(s[o])&&(a+=s[o]);const u=Math.trunc(a);r[o]=u,n[o]=(a*1e3-u*1e3)/1e3}else ar(s[o])&&(n[o]=s[o]);for(const o in n)n[o]!==0&&(r[i]+=o===i?n[o]:n[o]/this.matrix[i][o]);return Iu(this.matrix,r),Qt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return Qt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,s){return n===void 0||n===0?s===void 0||s===0:n===s}for(const n of xr)if(!r(this.values[n],t.values[n]))return!1;return!0}}const Ir="Invalid Interval";function qp(e,t){return!e||!e.isValid?ce.invalid("missing or invalid start"):!t||!t.isValid?ce.invalid("missing or invalid end"):t<e?ce.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ce{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new Ae("need to specify a reason the Interval is invalid");const n=t instanceof wt?t:new wt(t,r);if(oe.throwOnInvalid)throw new hm(n);return new ce({invalid:n})}static fromDateTimes(t,r){const n=En(t),s=En(r),i=qp(n,s);return i??new ce({start:n,end:s})}static after(t,r){const n=q.fromDurationLike(r),s=En(t);return ce.fromDateTimes(s,s.plus(n))}static before(t,r){const n=q.fromDurationLike(r),s=En(t);return ce.fromDateTimes(s.minus(n),s)}static fromISO(t,r){const[n,s]=(t||"").split("/",2);if(n&&s){let i,o;try{i=I.fromISO(n,r),o=i.isValid}catch{o=!1}let a,u;try{a=I.fromISO(s,r),u=a.isValid}catch{u=!1}if(o&&u)return ce.fromDateTimes(i,a);if(o){const l=q.fromISO(s,r);if(l.isValid)return ce.after(i,l)}else if(u){const l=q.fromISO(n,r);if(l.isValid)return ce.before(a,l)}}return ce.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let s;return r?.useLocaleWeeks?s=this.end.reconfigure({locale:n.locale}):s=this.end,s=s.startOf(t,r),Math.floor(s.diff(n,t).get(t))+(s.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?ce.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(En).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),n=[];let{s}=this,i=0;for(;s<this.e;){const o=r[i]||this.e,a=+o>+this.e?this.e:o;n.push(ce.fromDateTimes(s,a)),s=a,i+=1}return n}splitBy(t){const r=q.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,s=1,i;const o=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*s));i=+a>+this.e?this.e:a,o.push(ce.fromDateTimes(n,i)),n=i,s+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:ce.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return ce.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((s,i)=>s.s-i.s).reduce(([s,i],o)=>i?i.overlaps(o)||i.abutsStart(o)?[s,i.union(o)]:[s.concat([i]),o]:[s,o],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const s=[],i=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),o=Array.prototype.concat(...i),a=o.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&s.push(ce.fromDateTimes(r,u.time)),r=null);return ce.merge(s)}difference(...t){return ce.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Ir}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Zs,r={}){return this.isValid?$e.create(this.s.loc.clone(r),t).formatInterval(this):Ir}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Ir}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ir}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Ir}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:Ir}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):q.invalid(this.invalidReason)}mapEndpoints(t){return ce.fromDateTimes(t(this.s),t(this.e))}}class Es{static hasDST(t=oe.defaultZone){const r=I.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return zt.isValidZone(t)}static normalizeZone(t){return sr(t,oe.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Q.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Q.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Q.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||Q.create(r,n,i)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||Q.create(r,n,i)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:s=null}={}){return(s||Q.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:s=null}={}){return(s||Q.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Q.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Q.create(r,null,"gregory").eras(t)}static features(){return{relative:Id(),localeWeek:Rd()}}}function Ru(e,t){const r=s=>s.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(q.fromMillis(n).as("days"))}function zp(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=Ru(u,l);return(c-c%7)/7}],["days",Ru]],s={},i=e;let o,a;for(const[u,l]of n)r.indexOf(u)>=0&&(o=u,s[u]=l(e,t),a=i.plus(s),a>t?(s[u]--,e=i.plus(s),e>t&&(a=e,s[u]--,e=i.plus(s))):e=a);return[e,s,a,o]}function Kp(e,t,r,n){let[s,i,o,a]=zp(e,t,r);const u=t-s,l=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);l.length===0&&(o<t&&(o=s.plus({[a]:1})),o!==s&&(i[a]=(i[a]||0)+u/(o-s)));const c=q.fromObject(i,n);return l.length>0?q.fromMillis(u,n).shiftTo(...l).plus(c):c}const Gp="missing Intl.DateTimeFormat.formatToParts support";function Y(e,t=r=>r){return{regex:e,deser:([r])=>t(Rm(r))}}const Zp=" ",ef=`[ ${Zp}]`,tf=new RegExp(ef,"g");function Yp(e){return e.replace(/\./g,"\\.?").replace(tf,ef)}function Lu(e){return e.replace(/\./g,"").replace(tf," ").toLowerCase()}function mt(e,t){return e===null?null:{regex:RegExp(e.map(Yp).join("|")),deser:([r])=>e.findIndex(n=>Lu(r)===Lu(n))+t}}function Ou(e,t){return{regex:e,deser:([,r,n])=>gi(r,n),groups:t}}function As(e){return{regex:e,deser:([t])=>t}}function Jp(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Hp(e,t){const r=ht(t),n=ht(t,"{2}"),s=ht(t,"{3}"),i=ht(t,"{4}"),o=ht(t,"{6}"),a=ht(t,"{1,2}"),u=ht(t,"{1,3}"),l=ht(t,"{1,6}"),c=ht(t,"{1,9}"),d=ht(t,"{2,4}"),m=ht(t,"{4,6}"),p=A=>({regex:RegExp(Jp(A.val)),deser:([D])=>D,literal:!0}),w=(A=>{if(e.literal)return p(A);switch(A.val){case"G":return mt(t.eras("short"),0);case"GG":return mt(t.eras("long"),0);case"y":return Y(l);case"yy":return Y(d,Uo);case"yyyy":return Y(i);case"yyyyy":return Y(m);case"yyyyyy":return Y(o);case"M":return Y(a);case"MM":return Y(n);case"MMM":return mt(t.months("short",!0),1);case"MMMM":return mt(t.months("long",!0),1);case"L":return Y(a);case"LL":return Y(n);case"LLL":return mt(t.months("short",!1),1);case"LLLL":return mt(t.months("long",!1),1);case"d":return Y(a);case"dd":return Y(n);case"o":return Y(u);case"ooo":return Y(s);case"HH":return Y(n);case"H":return Y(a);case"hh":return Y(n);case"h":return Y(a);case"mm":return Y(n);case"m":return Y(a);case"q":return Y(a);case"qq":return Y(n);case"s":return Y(a);case"ss":return Y(n);case"S":return Y(u);case"SSS":return Y(s);case"u":return As(c);case"uu":return As(a);case"uuu":return Y(r);case"a":return mt(t.meridiems(),0);case"kkkk":return Y(i);case"kk":return Y(d,Uo);case"W":return Y(a);case"WW":return Y(n);case"E":case"c":return Y(r);case"EEE":return mt(t.weekdays("short",!1),1);case"EEEE":return mt(t.weekdays("long",!1),1);case"ccc":return mt(t.weekdays("short",!0),1);case"cccc":return mt(t.weekdays("long",!0),1);case"Z":case"ZZ":return Ou(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return Ou(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return As(/[a-z_+-/]{1,256}?/i);case" ":return As(/[^\S\n\r]/);default:return p(A)}})(e)||{invalidReason:Gp};return w.token=e,w}const Qp={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Xp(e,t,r){const{type:n,value:s}=e;if(n==="literal"){const u=/^\s+$/.test(s);return{literal:!u,val:u?" ":s}}const i=t[n];let o=n;n==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=r.hour12?"hour12":"hour24");let a=Qp[o];if(typeof a=="object"&&(a=a[i]),a)return{literal:!1,val:a}}function eg(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function tg(e,t,r){const n=e.match(t);if(n){const s={};let i=1;for(const o in r)if(en(r,o)){const a=r[o],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(s[a.token.val[0]]=a.deser(n.slice(i,i+u))),i+=u}return[n,s]}else return[n,{}]}function rg(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return R(e.z)||(r=zt.create(e.z)),R(e.Z)||(r||(r=new Ne(e.Z)),n=e.Z),R(e.q)||(e.M=(e.q-1)*3+1),R(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),R(e.u)||(e.S=Da(e.u)),[Object.keys(e).reduce((i,o)=>{const a=t(o);return a&&(i[a]=e[o]),i},{}),r,n]}let zi=null;function ng(){return zi||(zi=I.fromMillis(1555555555555)),zi}function sg(e,t){if(e.literal)return e;const r=$e.macroTokenToFormatOpts(e.val),n=of(r,t);return n==null||n.includes(void 0)?e:n}function rf(e,t){return Array.prototype.concat(...e.map(r=>sg(r,t)))}class nf{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=rf($e.parseFormat(r),t),this.units=this.tokens.map(n=>Hp(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,s]=eg(this.units);this.regex=RegExp(n,"i"),this.handlers=s}}explainFromTokens(t){if(this.isValid){const[r,n]=tg(t,this.regex,this.handlers),[s,i,o]=n?rg(n):[null,null,void 0];if(en(n,"a")&&en(n,"H"))throw new qr("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:s,zone:i,specificOffset:o}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function sf(e,t,r){return new nf(e,r).explainFromTokens(t)}function ig(e,t,r){const{result:n,zone:s,specificOffset:i,invalidReason:o}=sf(e,t,r);return[n,s,i,o]}function of(e,t){if(!e)return null;const n=$e.create(t,e).dtFormatter(ng()),s=n.formatToParts(),i=n.resolvedOptions();return s.map(o=>Xp(o,e,i))}const Ki="Invalid DateTime",_u=864e13;function Nn(e){return new wt("unsupported zone",`the zone "${e.name}" is not supported`)}function Gi(e){return e.weekData===null&&(e.weekData=Ys(e.c)),e.weekData}function Zi(e){return e.localWeekData===null&&(e.localWeekData=Ys(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Er(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new I({...r,...t,old:r})}function af(e,t,r){let n=e-t*60*1e3;const s=r.offset(n);if(t===s)return[n,t];n-=(s-t)*60*1e3;const i=r.offset(n);return s===i?[n,s]:[e-Math.min(s,i)*60*1e3,Math.max(s,i)]}function Cs(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function _s(e,t,r){return af(pi(e),t,r)}function Vu(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),s=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:n,month:s,day:Math.min(e.c.day,Js(n,s))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=q.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=pi(i);let[u,l]=af(a,r,e.zone);return o!==0&&(u+=o,l=e.zone.offset(u)),{ts:u,o:l}}function Rr(e,t,r,n,s,i){const{setZone:o,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=I.fromObject(e,{...r,zone:u,specificOffset:i});return o?l:l.setZone(a)}else return I.invalid(new wt("unparsable",`the input "${s}" can't be parsed as ${n}`))}function $s(e,t,r=!0){return e.isValid?$e.create(Q.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Yi(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=pe(e.c.year,r?6:4),t?(n+="-",n+=pe(e.c.month),n+="-",n+=pe(e.c.day)):(n+=pe(e.c.month),n+=pe(e.c.day)),n}function Uu(e,t,r,n,s,i){let o=pe(e.c.hour);return t?(o+=":",o+=pe(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=":")):o+=pe(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=pe(e.c.second),(e.c.millisecond!==0||!n)&&(o+=".",o+=pe(e.c.millisecond,3))),s&&(e.isOffsetFixed&&e.offset===0&&!i?o+="Z":e.o<0?(o+="-",o+=pe(Math.trunc(-e.o/60)),o+=":",o+=pe(Math.trunc(-e.o%60))):(o+="+",o+=pe(Math.trunc(e.o/60)),o+=":",o+=pe(Math.trunc(e.o%60)))),i&&(o+="["+e.zone.ianaName+"]"),o}const uf={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},og={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},ag={ordinal:1,hour:0,minute:0,second:0,millisecond:0},lf=["year","month","day","hour","minute","second","millisecond"],ug=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],lg=["year","ordinal","hour","minute","second","millisecond"];function cg(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new ad(e);return t}function Wu(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return cg(e)}}function dg(e){if(Mn===void 0&&(Mn=oe.now()),e.type!=="iana")return e.offset(Mn);const t=e.name;let r=Wo.get(t);return r===void 0&&(r=e.offset(Mn),Wo.set(t,r)),r}function ju(e,t){const r=sr(t.zone,oe.defaultZone);if(!r.isValid)return I.invalid(Nn(r));const n=Q.fromObject(t);let s,i;if(R(e.year))s=oe.now();else{for(const u of lf)R(e[u])&&(e[u]=uf[u]);const o=Bd(e)||Pd(e);if(o)return I.invalid(o);const a=dg(r);[s,i]=_s(e,a,r)}return new I({ts:s,zone:r,loc:n,o:i})}function qu(e,t,r){const n=R(r.round)?!0:r.round,s=(o,a)=>(o=Ea(o,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(o,a)),i=o=>r.calendary?t.hasSame(e,o)?0:t.startOf(o).diff(e.startOf(o),o).get(o):t.diff(e,o).get(o);if(r.unit)return s(i(r.unit),r.unit);for(const o of r.units){const a=i(o);if(Math.abs(a)>=1)return s(a,o)}return s(e>t?-0:0,r.units[r.units.length-1])}function zu(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let Mn;const Wo=new Map;class I{constructor(t){const r=t.zone||oe.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new wt("invalid input"):null)||(r.isValid?null:Nn(r));this.ts=R(t.ts)?oe.now():t.ts;let s=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[s,i]=[t.old.c,t.old.o];else{const a=ar(t.o)&&!t.old?t.o:r.offset(this.ts);s=Cs(this.ts,a),n=Number.isNaN(s.year)?new wt("invalid input"):null,s=n?null:s,i=n?null:a}this._zone=r,this.loc=t.loc||Q.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=s,this.o=i,this.isLuxonDateTime=!0}static now(){return new I({})}static local(){const[t,r]=zu(arguments),[n,s,i,o,a,u,l]=r;return ju({year:n,month:s,day:i,hour:o,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=zu(arguments),[n,s,i,o,a,u,l]=r;return t.zone=Ne.utcInstance,ju({year:n,month:s,day:i,hour:o,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=Um(t)?t.valueOf():NaN;if(Number.isNaN(n))return I.invalid("invalid input");const s=sr(r.zone,oe.defaultZone);return s.isValid?new I({ts:n,zone:s,loc:Q.fromObject(r)}):I.invalid(Nn(s))}static fromMillis(t,r={}){if(ar(t))return t<-_u||t>_u?I.invalid("Timestamp out of range"):new I({ts:t,zone:sr(r.zone,oe.defaultZone),loc:Q.fromObject(r)});throw new Ae(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(ar(t))return new I({ts:t*1e3,zone:sr(r.zone,oe.defaultZone),loc:Q.fromObject(r)});throw new Ae("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=sr(r.zone,oe.defaultZone);if(!n.isValid)return I.invalid(Nn(n));const s=Q.fromObject(r),i=Hs(t,Wu),{minDaysInFirstWeek:o,startOfWeek:a}=Fu(i,s),u=oe.now(),l=R(r.specificOffset)?n.offset(u):r.specificOffset,c=!R(i.ordinal),d=!R(i.year),m=!R(i.month)||!R(i.day),p=d||m,v=i.weekYear||i.weekNumber;if((p||c)&&v)throw new qr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&c)throw new qr("Can't mix ordinal dates with month/day");const w=v||i.weekday&&!p;let A,D,S=Cs(u,l);w?(A=ug,D=og,S=Ys(S,o,a)):c?(A=lg,D=ag,S=qi(S)):(A=lf,D=uf);let M=!1;for(const Et of A){const Ft=i[Et];R(Ft)?M?i[Et]=D[Et]:i[Et]=S[Et]:M=!0}const L=w?Om(i,o,a):c?_m(i):Bd(i),z=L||Pd(i);if(z)return I.invalid(z);const Se=w?Su(i,o,a):c?xu(i):i,[ft,Oe]=_s(Se,l,n),Ze=new I({ts:ft,zone:n,o:Oe,loc:s});return i.weekday&&p&&t.weekday!==Ze.weekday?I.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${Ze.toISO()}`):Ze.isValid?Ze:I.invalid(Ze.invalid)}static fromISO(t,r={}){const[n,s]=Tp(t);return Rr(n,s,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,s]=Np(t);return Rr(n,s,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,s]=Mp(t);return Rr(n,s,r,"HTTP",r)}static fromFormat(t,r,n={}){if(R(t)||R(r))throw new Ae("fromFormat requires an input string and a format");const{locale:s=null,numberingSystem:i=null}=n,o=Q.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0}),[a,u,l,c]=ig(o,t,r);return c?I.invalid(c):Rr(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return I.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,s]=_p(t);return Rr(n,s,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new Ae("need to specify a reason the DateTime is invalid");const n=t instanceof wt?t:new wt(t,r);if(oe.throwOnInvalid)throw new fm(n);return new I({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=of(t,Q.fromObject(r));return n?n.map(s=>s?s.val:null).join(""):null}static expandFormat(t,r={}){return rf($e.parseFormat(t),Q.fromObject(r)).map(s=>s.val).join("")}static resetCache(){Mn=void 0,Wo.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Gi(this).weekYear:NaN}get weekNumber(){return this.isValid?Gi(this).weekNumber:NaN}get weekday(){return this.isValid?Gi(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Zi(this).weekday:NaN}get localWeekNumber(){return this.isValid?Zi(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Zi(this).weekYear:NaN}get ordinal(){return this.isValid?qi(this.c).ordinal:NaN}get monthShort(){return this.isValid?Es.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Es.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Es.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Es.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=pi(this.c),s=this.zone.offset(n-t),i=this.zone.offset(n+t),o=this.zone.offset(n-s*r),a=this.zone.offset(n-i*r);if(o===a)return[this];const u=n-o*r,l=n-a*r,c=Cs(u,o),d=Cs(l,a);return c.hour===d.hour&&c.minute===d.minute&&c.second===d.second&&c.millisecond===d.millisecond?[Er(this,{ts:u}),Er(this,{ts:l})]:[this]}get isInLeapYear(){return os(this.year)}get daysInMonth(){return Js(this.year,this.month)}get daysInYear(){return this.isValid?Gr(this.year):NaN}get weeksInWeekYear(){return this.isValid?Kn(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Kn(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:s}=$e.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:s}}toUTC(t=0,r={}){return this.setZone(Ne.instance(t),r)}toLocal(){return this.setZone(oe.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=sr(t,oe.defaultZone),t.equals(this.zone))return this;if(t.isValid){let s=this.ts;if(r||n){const i=t.offset(this.ts),o=this.toObject();[s]=_s(o,i,t)}return Er(this,{ts:s,zone:t})}else return I.invalid(Nn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const s=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Er(this,{loc:s})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Hs(t,Wu),{minDaysInFirstWeek:n,startOfWeek:s}=Fu(r,this.loc),i=!R(r.weekYear)||!R(r.weekNumber)||!R(r.weekday),o=!R(r.ordinal),a=!R(r.year),u=!R(r.month)||!R(r.day),l=a||u,c=r.weekYear||r.weekNumber;if((l||o)&&c)throw new qr("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&o)throw new qr("Can't mix ordinal dates with month/day");let d;i?d=Su({...Ys(this.c,n,s),...r},n,s):R(r.ordinal)?(d={...this.toObject(),...r},R(r.day)&&(d.day=Math.min(Js(d.year,d.month),d.day))):d=xu({...qi(this.c),...r});const[m,p]=_s(d,this.o,this.zone);return Er(this,{ts:m,o:p})}plus(t){if(!this.isValid)return this;const r=q.fromDurationLike(t);return Er(this,Vu(this,r))}minus(t){if(!this.isValid)return this;const r=q.fromDurationLike(t).negate();return Er(this,Vu(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},s=q.normalizeUnit(t);switch(s){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(s==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:o}=this;o<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(s==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?$e.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):Ki}toLocaleString(t=Zs,r={}){return this.isValid?$e.create(this.loc.clone(r),t).formatDateTime(this):Ki}toLocaleParts(t={}){return this.isValid?$e.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:s=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const o=t==="extended";let a=Yi(this,o);return a+="T",a+=Uu(this,o,r,n,s,i),a}toISODate({format:t="extended"}={}){return this.isValid?Yi(this,t==="extended"):null}toISOWeekDate(){return $s(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:s=!1,extendedZone:i=!1,format:o="extended"}={}){return this.isValid?(s?"T":"")+Uu(this,o==="extended",r,t,n,i):null}toRFC2822(){return $s(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return $s(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Yi(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let s="HH:mm:ss.SSS";return(r||t)&&(n&&(s+=" "),r?s+="z":t&&(s+="ZZ")),$s(this,s,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Ki}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return q.invalid("created by diffing an invalid DateTime");const s={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=Wm(r).map(q.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,u=o?t:this,l=Kp(a,u,i,s);return o?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(I.now(),t,r)}until(t){return this.isValid?ce.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const s=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(r,n)<=s&&s<=i.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||I.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let s=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(s=t.unit,i=void 0),qu(r,this.plus(n),{...t,numeric:"always",units:s,unit:i})}toRelativeCalendar(t={}){return this.isValid?qu(t.base||I.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(I.isDateTime))throw new Ae("min requires all arguments be DateTimes");return Tu(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(I.isDateTime))throw new Ae("max requires all arguments be DateTimes");return Tu(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:s=null,numberingSystem:i=null}=n,o=Q.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0});return sf(o,t,r)}static fromStringExplain(t,r,n={}){return I.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:s=null}=r,i=Q.fromOpts({locale:n,numberingSystem:s,defaultToEN:!0});return new nf(i,t)}static fromFormatParser(t,r,n={}){if(R(t)||R(r))throw new Ae("fromFormatParser requires an input string and a format parser");const{locale:s=null,numberingSystem:i=null}=n,o=Q.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0});if(!o.equals(r.locale))throw new Ae(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=r.explainFromTokens(t);return c?I.invalid(c):Rr(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return Zs}static get DATE_MED(){return ud}static get DATE_MED_WITH_WEEKDAY(){return pm}static get DATE_FULL(){return ld}static get DATE_HUGE(){return cd}static get TIME_SIMPLE(){return dd}static get TIME_WITH_SECONDS(){return fd}static get TIME_WITH_SHORT_OFFSET(){return hd}static get TIME_WITH_LONG_OFFSET(){return md}static get TIME_24_SIMPLE(){return pd}static get TIME_24_WITH_SECONDS(){return gd}static get TIME_24_WITH_SHORT_OFFSET(){return yd}static get TIME_24_WITH_LONG_OFFSET(){return wd}static get DATETIME_SHORT(){return vd}static get DATETIME_SHORT_WITH_SECONDS(){return bd}static get DATETIME_MED(){return Dd}static get DATETIME_MED_WITH_SECONDS(){return Ed}static get DATETIME_MED_WITH_WEEKDAY(){return gm}static get DATETIME_FULL(){return Ad}static get DATETIME_FULL_WITH_SECONDS(){return Cd}static get DATETIME_HUGE(){return $d}static get DATETIME_HUGE_WITH_SECONDS(){return kd}}function En(e){if(I.isDateTime(e))return e;if(e&&e.valueOf&&ar(e.valueOf()))return I.fromJSDate(e);if(e&&typeof e=="object")return I.fromObject(e);throw new Ae(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var B;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(B||(B={}));B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";const cf=[B.Milliseconds,B.Seconds,B.Minutes,B.Hours,B.Days,B.Weeks,B.Months,B.Quarters,B.Years];B.Milliseconds+"",B.Seconds+"",B.Minutes+"",B.Hours+"",B.Days+"",B.Weeks+"",B.Months+"",B.Quarters+"",B.Years+"";function fg(e){return cf.filter(t=>e[t])}function jo(e,{roundToDigits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function hg(e){return jo(Math.max(e-.4,0),{roundToDigits:0})}function Ku(e){return e===0?0:Math.sign(e)}function tn(e,t,r={}){const n={},s={roundToDigits:r.roundToDigits==null?void 0:Math.round(Math.abs(r.roundToDigits))},i=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0);let a=q.fromObject(e).as(B.Milliseconds);const u=fg(t).reverse(),l=Ku(a);u.forEach((p,v)=>{const w=v===u.length-1;if(i&&o||i)n[p]=1/0;else if(o)n[p]=-1/0;else if(p===B.Milliseconds)n.milliseconds=jo(a,s);else{const A=q.fromObject({milliseconds:a}).as(p),D=Math.sign(A),S=Math.abs(A),M=w?jo(S,s):Math.floor(s.roundToDigits==null?S:hg(S)),L=M===0?0:M*D;n[p]=L,a-=q.fromObject({[p]:L}).as(B.Milliseconds),l!==Ku(a)&&(a=0)}});let c=!1;const d=[],m=cf.toReversed().filter(p=>n[p]?(c=!0,!0):c?(d.push(p),!1):!0);if(m.length<u.length){const p={};m.forEach(w=>p[w]=!0);const v=tn(e,p,s);return d.forEach(w=>v[w]=0),v}return n}var N;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(N||(N={}));N.Year,N.Hour,N.Minute,N.Second,N.Millisecond;N.Quarter,N.Month,N.Week,N.Day;N.Millisecond,N.Second,N.Minute,N.Hour,N.Day,N.Week,N.Month,N.Quarter,N.Year;var Ce;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(Ce||(Ce={}));Ce.Sunday+"",Ce.Monday+"",Ce.Tuesday+"",Ce.Wednesday+"",Ce.Thursday+"",Ce.Friday+"",Ce.Saturday+"";Ce.Sunday,Ce.Monday,Ce.Tuesday,Ce.Wednesday,Ce.Thursday,Ce.Friday,Ce.Saturday;var Ue;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(Ue||(Ue={}));Ue.January,Ue.February,Ue.March,Ue.April,Ue.May,Ue.June,Ue.July,Ue.August,Ue.September,Ue.October,Ue.November,Ue.December;const Gu={min:1,max:12},Zu={min:1,max:31},Yu={min:0,max:23},Ju={min:0,max:59},Hu={min:0,max:59},Qu={min:0,max:999};function Gn(e){const t=new od,r=tn(e,{milliseconds:!0}).milliseconds;return r!==1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}var mg=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Kt;(function(e){e.Node="node",e.Web="web"})(Kt||(Kt={}));function pg(){return mg?Kt.Node:Kt.Web}const df=pg();function gg(e){return df===e}function ff(e){return e[df]()}class f extends Error{name="AssertionError";constructor(t,r){super(di(r,t)||"Assertion failed.")}}const Xu={interval:{milliseconds:100},timeout:{seconds:10}},Ji=Symbol("not set");async function yg(e,t,r){const{callback:n,extraAssertionArgs:s,failureMessage:i,options:o}=wg(t),a=tn(o.timeout,{milliseconds:!0}).milliseconds,u=tn(o.interval,{milliseconds:!0});let l=Ji,c;async function d(){try{l=r?n():await n(),e(l,...s)}catch(p){l=Ji,c=ze(p)}}const m=Date.now();for(;l===Ji;)if(await d(),await Gn(u),Date.now()-m>=a){const v=`${i?`${i}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw fi(c,v)}return l}function $(e,t=!1){return(...r)=>yg(e,r,t)}function wg(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:hf(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function hf(e){return{interval:e?.interval||Xu.interval,timeout:e?.timeout||Xu.timeout}}const An={isFalse(e,t){if(e!==!1)throw new f(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new f(`'${h(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new f(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new f(`'${h(e)}' is not truthy.`,t)}},mf={assert:An,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new f(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new f(`'${h(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new f(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new f(`'${h(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:$(An.isFalse),isFalsy:$(An.isFalsy),isTrue:$(An.isTrue),isTruthy:$(An.isTruthy)}};function vg(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new f(`${h(e)} does not end with ${h(t)}}`,r)}else if(e[e.length-1]!==t)throw new f(`${h(e)} does not end with ${h(t)}}`,r)}function bg(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new f(`${h(e)} ends with ${h(t)}}`,r)}else if(e[e.length-1]===t)throw new f(`${h(e)} ends with ${h(t)}}`,r)}function Dg(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new f(`${h(e)} does not start with ${h(t)}}`,r)}else if(e[0]!==t)throw new f(`${h(e)} does not start with ${h(t)}}`,r)}function Eg(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new f(`${h(e)} starts with ${h(t)}}`,r)}else if(e[0]===t)throw new f(`${h(e)} starts with ${h(t)}}`,r)}const Cn={endsWith:vg,endsWithout:bg,startsWith:Dg,startsWithout:Eg},pf={assert:Cn,check:{endsWith:(e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t,endsWithout:(e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t,startsWith:(e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t,startsWithout:(e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t},assertWrap:{endsWith:(e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new f(`${h(e)} does not end with ${h(t)}}`,r)}else if(e[e.length-1]!==t)throw new f(`${h(e)} does not end with ${h(t)}}`,r);return e},endsWithout:(e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new f(`${h(e)} ends with ${h(t)}}`,r)}else if(e[e.length-1]===t)throw new f(`${h(e)} ends with ${h(t)}}`,r);return e},startsWith:(e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new f(`${h(e)} does not start with ${h(t)}}`,r)}else if(e[0]!==t)throw new f(`${h(e)} does not start with ${h(t)}}`,r);return e},startsWithout:(e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new f(`${h(e)} starts with ${h(t)}}`,r)}else if(e[0]===t)throw new f(`${h(e)} starts with ${h(t)}}`,r);return e}},checkWrap:{endsWith:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e},endsWithout:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e},startsWith:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e},startsWithout:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e}},waitUntil:{endsWith:$(Cn.endsWith),endsWithout:$(Cn.endsWithout),startsWith:$(Cn.startsWith),startsWithout:$(Cn.startsWithout)}};function Ag(e,t,r){const n=gt(t);if(!n.includes(e))throw new f(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function Pt(e,t){return gt(t).includes(e)}const Hi={isEnumValue(e,t,r){Ag(e,t,r)},isNotEnumValue(e,t,r){const n=gt(t);if(n.includes(e))throw new f(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},gf={assert:Hi,check:{isEnumValue:Pt,isNotEnumValue(e,t){return!gt(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=gt(t);if(!n.includes(e))throw new f(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=gt(t);if(n.includes(e))throw new f(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(gt(t).includes(e))return e},isNotEnumValue(e,t){if(!gt(t).includes(e))return e}},waitUntil:{isEnumValue:$(Hi.isEnumValue),isNotEnumValue:$(Hi.isNotEnumValue)}},Qi={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new f(`${h(e)} is not an object.`,r);if(!t||typeof t!="object")throw new f(`${h(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(s=>{const i=e[s],o=t[s];if(i!==o)throw new f(`Entries are not equal at key '${String(s)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],a=t[i];return o!==a}))throw new f("Entries are equal.",r)}},yf={assert:Qi,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const s=e[n],i=t[n];return s===i})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const s=e[n],i=t[n];return s!==i})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new f(`${h(e)} is not an object.`,r);if(!t||typeof t!="object")throw new f(`${h(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(s=>{const i=e[s],o=t[s];if(i!==o)throw new f(`Entries are not equal at key '${String(s)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],a=t[i];return o!==a}))return e;throw new f("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(s=>{const i=e[s],o=t[s];return i===o}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const i=e[s],o=t[s];return i!==o}))return e}},waitUntil:{entriesEqual:$(Qi.entriesEqual),notEntriesEqual:$(Qi.notEntriesEqual)}};function Qs(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Zn(e,t){if(!(e===t||Qs(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Qs(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(i=>{try{Zn(e[i],t[i])}catch(o){throw new Error(`JSON objects are not equal at key '${i}': ${Ie(o)}`)}})}throw new Error("Values are not JSON equal.")}}function Bn(e,t){if(e===t||Qs(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Qs(r,n)?!1:Object.keys(e).every(i=>Bn(e[i],t[i]))}return!1}const Xi={jsonEquals(e,t,r){try{Zn(e,t)}catch(n){throw new f(Ie(n),r)}},notJsonEquals(e,t,r){try{Zn(e,t)}catch{return}throw new f("Values are JSON equal.",r)}},wf={assert:Xi,check:{jsonEquals(e,t){return Bn(e,t)},notJsonEquals(e,t){return!Bn(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return Zn(e,t),e}catch(n){throw new f(Ie(n),r)}},notJsonEquals(e,t,r){try{Zn(e,t)}catch{return e}throw new f("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(Bn(e,t))return e},notJsonEquals(e,t){if(!Bn(e,t))return e}},waitUntil:{jsonEquals:$(Xi.jsonEquals),notJsonEquals:$(Xi.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function el(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function vf(){this._key="chai/deep-eql__"+Math.random()+Date.now()}vf.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var bf=typeof WeakMap=="function"?WeakMap:vf;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function tl(e,t,r){if(!r||rn(e)||rn(t))return null;var n=r.get(e);if(n){var s=n.get(t);if(typeof s=="boolean")return s}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function ks(e,t,r,n){if(!(!r||rn(e)||rn(t))){var s=r.get(e);s?s.set(t,n):(s=new bf,s.set(t,n),r.set(e,s))}}function pt(e,t,r){if(r&&r.comparator)return rl(e,t,r);var n=Df(e,t);return n!==null?n:rl(e,t,r)}function Df(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:rn(e)||rn(t)?!1:null}/*!
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
*/function rl(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new bf;var n=r&&r.comparator,s=tl(e,t,r.memoize);if(s!==null)return s;var i=tl(t,e,r.memoize);if(i!==null)return i;if(n){var o=n(e,t);if(o===!1||o===!0)return ks(e,t,r.memoize,o),o;var a=Df(e,t);if(a!==null)return a}var u=el(e);if(u!==el(t))return ks(e,t,r.memoize,!1),!1;ks(e,t,r.memoize,!0);var l=Cg(e,t,u,r);return ks(e,t,r.memoize,l),l}function Cg(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return pt(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Ef(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return Tr(e,t,n);case"RegExp":return $g(e,t);case"Generator":return kg(e,t,n);case"DataView":return Tr(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return Tr(new Uint8Array(e),new Uint8Array(t),n);case"Set":return nl(e,t,n);case"Map":return nl(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return xg(e,t,n)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function $g(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function nl(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],s=[];return e.forEach(function(o,a){n.push([o,a])}),t.forEach(function(o,a){s.push([o,a])}),Tr(n.sort(),s.sort(),r)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Tr(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var s=-1;++s<n;)if(pt(e[s],t[s],r)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function kg(e,t,r){return Tr(qo(e),qo(t),r)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function Sg(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function sl(e){if(Sg(e))try{return qo(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function qo(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function il(e){var t=[];for(var r in e)t.push(r);return t}function ol(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var s=r[n];Object.getOwnPropertyDescriptor(e,s).enumerable&&t.push(s)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Ef(e,t,r,n){var s=r.length;if(s===0)return!0;for(var i=0;i<s;i+=1)if(pt(e[r[i]],t[r[i]],n)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function xg(e,t,r){var n=il(e),s=il(t),i=ol(e),o=ol(t);if(n=n.concat(i),s=s.concat(o),n.length&&n.length===s.length)return Tr(al(n).sort(),al(s).sort())===!1?!1:Ef(e,t,n,r);var a=sl(e),u=sl(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),Tr(a,u,r)):n.length===0&&a.length===0&&s.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function rn(e){return e===null||typeof e!="object"}function al(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}function rr(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const er={strictEquals(e,t,r){if(e!==t)throw new f(`

${h(e)}

does not strictly equal

${h(t)}

`,r)},notStrictEquals(e,t,r){if(e===t)throw new f(`

${h(e)}

strictly equals

${h(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw new f(`

${h(e)}

does not loosely equal

${h(t)}

`,r)},notLooseEquals(e,t,r){if(e==t)throw new f(`

${h(e)}

loosely equals

${h(t)}

`,r)},deepEquals(e,t,r){if(!pt(e,t,{comparator:rr}))throw new f(`

${h(e)}

does not deeply equal

${h(t)}

`,r)},notDeepEquals(e,t,r){if(pt(e,t,{comparator:rr}))throw new f(`

${h(e)}

deeply equals

${h(t)}

`,r)}},Af=er.deepEquals,Cf={assert:er,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return pt(e,t,{comparator:rr})},notDeepEquals(e,t){return!pt(e,t,{comparator:rr})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw new f(`

${h(e)}

does not strictly equal

${h(t)}

`,r)},notStrictEquals(e,t,r){if(e===t)throw new f(`

${h(e)}

strictly equals

${h(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw new f(`

${h(e)}

does not loosely equal

${h(t)}

`,r)},notLooseEquals(e,t,r){if(e==t)throw new f(`

${h(e)}

loosely equals

${h(t)}

`,r);return e},deepEquals(e,t,r){if(pt(e,t,{comparator:rr}))return e;throw new f(`

${h(e)}

does not deeply equal

${h(t)}

`,r)},notDeepEquals(e,t,r){if(pt(e,t,{comparator:rr}))throw new f(`

${h(e)}

deeply equals

${h(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(pt(e,t,{comparator:rr}))return e},notDeepEquals(e,t){if(!pt(e,t,{comparator:rr}))return e}},waitUntil:{strictEquals:$(er.strictEquals),notStrictEquals:$(er.notStrictEquals),looseEquals:$(er.looseEquals),notLooseEquals:$(er.notLooseEquals),deepEquals:$(er.deepEquals),notDeepEquals:$(er.notDeepEquals)}};function Je(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function ot(e,t){return typeof t=="string"?t.includes(e):Je(t,e)}const Nt={hasValue(e,t,r){if(!Je(e,t))throw new f(`'${h(e)}' does not have value '${h(t)}'.`,r)},lacksValue(e,t,r){if(Je(e,t))throw new f(`'${h(e)}' has value '${h(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(s=>!(typeof s=="string"&&e.includes(s)));else try{const s=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!s.includes(i))}catch{throw new f(`'${h(e)}' does not have values '${h(t)}'.`,r)}if(n.length)throw new f(`'${h(e)}' does not have values '${h(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(s=>typeof s=="string"&&e.includes(s));else try{const s=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>s.includes(i))}catch{}if(n.length)throw new f(`'${h(e)}' has values '${h(n)}'.`,r)},isIn(e,t,r){if(!ot(e,t))throw new f(`'${h(e)}'

is not in

${h(t)}.`,r)},isNotIn(e,t,r){if(ot(e,t))throw new f(`'${h(e)}'

is in

${h(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new f(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new f(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new f(`'${h(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new f(`'${h(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new f(`'${h(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new f(`'${h(e)}' is not empty.`,t)}}},$f={assert:Nt,check:{hasValue(e,t){return Je(e,t)},lacksValue(e,t){return!Je(e,t)},hasValues(e,t){return t.every(r=>Je(e,r))},lacksValues(e,t){return t.every(r=>!Je(e,r))},isIn(e,t){return ot(e,t)},isNotIn(e,t){return!ot(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!Je(e,t))throw new f(`'${h(e)}' does not have value '${h(t)}'.`,r);return e},lacksValue(e,t,r){if(Je(e,t))throw new f(`'${h(e)}' has value '${h(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(s=>!(typeof s=="string"&&e.includes(s)));else try{const s=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>!s.includes(i))}catch{throw new f(`'${h(e)}' does not have values '${h(t)}'.`,r)}if(n.length)throw new f(`'${h(e)}' does not have values '${h(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(s=>typeof s=="string"&&e.includes(s));else try{const s=Reflect.ownKeys(e).map(i=>e[i]);n=t.filter(i=>s.includes(i))}catch{}if(n.length)throw new f(`'${h(e)}' has values '${h(n)}'.`,r);return e},isIn(e,t,r){if(!ot(e,t))throw new f(`'${h(e)}'

is not in

${h(t)}.`,r);return e},isNotIn(e,t,r){if(ot(e,t))throw new f(`'${h(e)}'

is in

${h(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new f(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new f(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new f(`'${h(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new f(`'${h(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new f(`'${h(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new f(`'${h(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(Je(e,t))return e},lacksValue(e,t){if(!Je(e,t))return e},hasValues(e,t){if(t.every(r=>Je(e,r)))return e},lacksValues(e,t){if(!t.every(r=>Je(e,r)))return e},isIn(e,t){if(ot(e,t))return e},isNotIn(e,t){if(!ot(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:$(Nt.hasValue),lacksValue:$(Nt.lacksValue),hasValues:$(Nt.hasValues),lacksValues:$(Nt.lacksValues),isIn:$(Nt.isIn),isNotIn:$(Nt.isNotIn),isEmpty:$(Nt.isEmpty),isNotEmpty:$(Nt.isNotEmpty)}},eo={isHttpStatus(e,t){if(!Pt(e,g))throw new f(`${h(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(Pt(e,g)){if(!ot(e,Os[t]))throw new f(`${h(e)} is not a '${t}' HTTP status.`,r)}else throw new f(`${h(e)} is not a valid HTTP status.`,r)}},kf={assert:eo,check:{isHttpStatus(e){return Pt(e,g)},isHttpStatusCategory(e,t){return Pt(e,g)&&ot(e,Os[t])}},assertWrap:{isHttpStatus(e,t){if(!Pt(e,g))throw new f(`${h(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(Pt(e,g)){if(!ot(e,Os[t]))throw new f(`${h(e)} is not a '${t}' HTTP status.`,r)}else throw new f(`${h(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(Pt(e,g))return e},isHttpStatusCategory(e,t){if(Pt(e,g)&&ot(e,Os[t]))return e}},waitUntil:{isHttpStatus:$(eo.isHttpStatus),isHttpStatusCategory:$(eo.isHttpStatusCategory)}},to={instanceOf(e,t,r){if(!(e instanceof t))throw new f(`'${h(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new f(`'${h(e)}' is an instance of '${t.name}'`,r)}},Sf={assert:to,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new f(`'${h(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new f(`'${h(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:$(to.instanceOf),notInstanceOf:$(to.notInstanceOf)}},Fg=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ie(e,t){return Fg.some(r=>{try{return r(e,t)}catch{return!1}})}const Ar={isKeyOf(e,t,r){if(!ie(t,e))throw new f(`'${String(e)}' is not a key of '${h(t)}'.`,r)},isNotKeyOf(e,t,r){if(ie(t,e))throw new f(`'${String(e)}' is a key of '${h(t)}'.`,r)},hasKey(e,t,r){if(!ie(e,t))throw new f(`'${h(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(ie(e,t))throw new f(`'${h(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(s=>!ie(e,s));if(n.length)throw new f(`'${h(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(s=>ie(e,s));if(n.length)throw new f(`'${h(e)}' does not lack keys '${n.join(",")}'.`,r)}},xf={assert:Ar,check:{isKeyOf(e,t){return ie(t,e)},isNotKeyOf(e,t){return!ie(t,e)},hasKey:ie,lacksKey(e,t){return!ie(e,t)},hasKeys(e,t){return t.every(r=>ie(e,r))},lacksKeys(e,t){return t.every(r=>!ie(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!ie(t,e))throw new f(`'${String(e)}' is not a key of '${h(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(ie(t,e))throw new f(`'${String(e)}' is a key of '${h(t)}'.`,r);return e},hasKey(e,t,r){if(!ie(e,t))throw new f(`'${h(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(ie(e,t))throw new f(`'${h(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(s=>!ie(e,s));if(n.length)throw new f(`'${h(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(s=>ie(e,s));if(n.length)throw new f(`'${h(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(ie(t,e))return e},isNotKeyOf(e,t){if(!ie(t,e))return e},hasKey(e,t){if(ie(e,t))return e},lacksKey(e,t){if(!ie(e,t))return e},hasKeys(e,t){if(t.every(r=>ie(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!ie(e,r)))return e}},waitUntil:{isKeyOf:$(Ar.isKeyOf),isNotKeyOf:$(Ar.isNotKeyOf),hasKey:$(Ar.hasKey),lacksKey:$(Ar.lacksKey),hasKeys:$(Ar.hasKeys),lacksKeys:$(Ar.lacksKeys)}};function Tg(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:X(e).length)<t)throw new f(`Length '${e.length}' is not at least '${t}'.`,r)}function Ng(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:X(e).length)!==t)throw new f(`Length '${e.length}' is not exactly '${t}'.`,r)}const ro={isLengthAtLeast:Tg,isLengthExactly:Ng},Ff={assert:ro,check:{isLengthAtLeast:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:X(e).length)>=t,isLengthExactly:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:X(e).length)===t},assertWrap:{isLengthAtLeast:(e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:X(e).length)<t)throw new f(`Length '${e.length}' is not at least '${t}'.`,r);return e},isLengthExactly:(e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:X(e).length)!==t)throw new f(`Length '${e.length}' is not exactly '${t}'.`,r);return e}},checkWrap:{isLengthAtLeast:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:X(e).length)>=t)return e},isLengthExactly:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:X(e).length)===t)return e}},waitUntil:{isLengthAtLeast:$(ro.isLengthAtLeast),isLengthExactly:$(ro.isLengthExactly)}},Mg={never(e){throw new f("This code should not have executed.",e)}},Tf={assert:Mg,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},no={isDefined(e,t){if(e==null)throw new f(`'${h(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new f(`'${h(e)}' is not a nullish.`,t)}},Nf={assert:no,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new f(`'${h(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new f(`'${h(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:$(no.isDefined),isNullish:$(no.isNullish)}},_e={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new f(`${e} is not within the bounds ${h({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new f(`${e} is not outside the bounds ${h({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new f(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new f(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new f(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new f(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new f(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new f(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new f(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new f(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new f(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new f(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new f(`${e} is within ±${r} of ${t}`,n)}},Mf={assert:_e,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new f(`${e} is not within the bounds ${h({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new f(`${e} is not outside the bounds ${h({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new f(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new f(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new f(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new f(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new f(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new f(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new f(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new f(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new f(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new f(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new f(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:$(_e.isInBounds),isOutBounds:$(_e.isOutBounds),isInteger:$(_e.isInteger),isNotInteger:$(_e.isNotInteger),isAbove:$(_e.isAbove),isAtLeast:$(_e.isAtLeast),isBelow:$(_e.isBelow),isAtMost:$(_e.isAtMost),isNaN:$(_e.isNaN),isFinite:$(_e.isFinite),isInfinite:$(_e.isInfinite),isApproximately:$(_e.isApproximately),isNotApproximately:$(_e.isNotApproximately)}};function Bg(e,t,r,n,s){return ls(...wi(e,t,r,n,s),!1)}function wi(e,t,r,n,s){const i=Array.isArray(r);return[i?e:Af,i?t:e,i?r:t,i?n:r,i?s:n]}function ls(e,t,r,n,s,i){const o=t(...r);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,n),i?a(l):a()}catch(l){u(new f(`Output from '${t.name}' did not produce expected output with input: ${h(r)}: ${Ie(l)}`,s))}});try{return e(o,n),i?o:void 0}catch(a){throw new f(`Output from '${t.name}' did not produce expected output with input: ${h(r)}: ${Ie(a)}`,s)}}function Pg(e,t,r,n,s){try{const i=ls(...wi(e,t,r,n,s),!1);return i instanceof Promise?new Promise(async o=>{try{await i,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function Ig(e,t,r,n,s){return ls(...wi(e,t,r,n,s),!0)}function Rg(e,t,r,n,s){try{const i=ls(...wi(e,t,r,n,s),!0);return i instanceof Promise?new Promise(async o=>{try{o(await i)}catch{o(void 0)}}):i}catch{return}}const so=Symbol("not set");async function Lg(e,t,r,n,s,i){const o=Array.isArray(r),a=o?e:Af,u=o?t:e,l=o?r:t,c=o?n:r,d=hf(o?s:n),m=o?i:s,p=tn(d.timeout,{milliseconds:!0}).milliseconds,v=tn(d.interval,{milliseconds:!0});let w=so,A;async function D(){try{w=await ls(a,u,l,c,void 0,!0)}catch(M){w=so,A=ze(M)}}const S=Date.now();for(;w===so;)if(await D(),await Gn(v),Date.now()-S>=p)throw fi(A,di(m,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return w}const Og={output:Bg},Bf={assert:Og,check:{output:Pg},assertWrap:{output:Ig},checkWrap:{output:Rg},waitUntil:{output:Lg}},$n={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new f(`'${h(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new f(`'${h(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new f(`'${h(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new f(`'${h(e)}' is not a Primitive.`,t)}},Pf={assert:$n,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new f(`'${h(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new f(`'${h(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new f(`'${h(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new f(`'${h(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:$($n.isNotPrimitive),isNotPropertyKey:$($n.isNotPropertyKey),isPrimitive:$($n.isPrimitive),isPropertyKey:$($n.isPropertyKey)}},kn={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new f(`'${h(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new f(`'${h(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new f(`'${h(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new f(`'${h(e)}' is a Promise.`,t)}},If={assert:kn,check:{isPromiseLike(e){return!!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new f(`'${h(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new f(`'${h(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new f(`'${h(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new f(`'${h(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:$(kn.isPromiseLike,!0),isNotPromiseLike:$(kn.isNotPromiseLike,!0),isPromise:$(kn.isPromise,!0),isNotPromise:$(kn.isNotPromise,!0)}},io={matches(e,t,r){if(!t.test(e))throw new f(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new f(`'${e}' matches ${t}`,r)}},Rf={assert:io,check:{matches(e,t){return!!t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new f(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new f(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:$(io.matches,!0),mismatches:$(io.mismatches,!0)}},de={isArray(e,t){if(!Array.isArray(e))throw new f(`'${h(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new f(`'${h(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new f(`'${h(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new f(`'${h(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new f(`'${h(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new f(`'${h(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new f(`'${h(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new f(`'${h(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new f(`'${h(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new f(`'${h(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new f(`'${h(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new f(`'${h(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new f(`'${h(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new f(`'${h(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new f(`'${h(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new f(`'${h(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new f(`'${h(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new f(`'${h(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new f(`'${h(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new f(`'${h(e)}' is a undefined.`,t)}},Lf={assert:de,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new f(`'${h(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new f(`'${h(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new f(`'${h(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new f(`'${h(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new f(`'${h(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new f(`'${h(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new f(`'${h(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new f(`'${h(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new f(`'${h(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new f(`'${h(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new f(`'${h(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new f(`'${h(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new f(`'${h(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new f(`'${h(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new f(`'${h(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new f(`'${h(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new f(`'${h(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new f(`'${h(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new f(`'${h(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new f(`'${h(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:$(de.isArray),isBigInt:$(de.isBigInt),isBoolean:$(de.isBoolean),isFunction:$(de.isFunction),isNull:$(de.isNull),isNumber:$(de.isNumber),isObject:$(de.isObject),isString:$(de.isString),isSymbol:$(de.isSymbol),isUndefined:$(de.isUndefined),isNotArray:$(de.isNotArray),isNotBigInt:$(de.isNotBigInt),isNotBoolean:$(de.isNotBoolean),isNotFunction:$(de.isNotFunction),isNotNull:$(de.isNotNull),isNotNumber:$(de.isNotNumber),isNotObject:$(de.isNotObject),isNotString:$(de.isNotString),isNotSymbol:$(de.isNotSymbol),isNotUndefined:$(de.isNotUndefined)}};var je;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(je||(je={}));function ka(e,t,r){Sa(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,r)}function ul(e,t,r){Sa(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${h(e)}' is not an error instance.`},t,r)}function Sa(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const s=e.constructor.name;throw new f(`Error constructor '${s}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const s=Ie(e);if(typeof r.matchMessage=="string"){if(!s.includes(r.matchMessage))throw new f(`Error message

'${s}'

does not contain

'${r.matchMessage}'.`,n)}else if(!s.match(r.matchMessage))throw new f(`Error message

'${s}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new f(t.notInstance,n);else throw new f(t.noError,n)}function ll(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=Ie(e);if(typeof t.matchMessage=="string"){if(!r.includes(t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function vi(e,t,r,n){let s;try{const i=t instanceof Promise?t:t();if(i instanceof Promise)return new Promise(async(o,a)=>{try{await i}catch(u){s=ze(u)}try{ul(s,r,n),e===je.Assert?o():e===je.Check?o(!0):o(s)}catch(u){e===je.CheckWrap?o(void 0):e===je.Check?o(!1):a(ze(u))}})}catch(i){s=ze(i)}try{return ul(s,r,n),e===je.Check?!0:e!==je.Assert?s:void 0}catch(i){if(e===je.CheckWrap)return;if(e===je.Check)return!1;throw i}}function _g(e,t,r){return vi(je.Assert,e,t,r)}function Vg(e,t){return vi(je.Check,e,t)}function Ug(e,t,r){return vi(je.AssertWrap,e,t,r)}function Wg(e,t,r){return vi(je.CheckWrap,e,t,r)}const jg=$(ka);function qg(e,t,r,n){const s=typeof e=="function"||e instanceof Promise?void 0:e,i=s?t:e,o=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof i!="function")throw new TypeError(`Callback is not a function, got '${h(i)}'`);return jg(s,async()=>{try{await i();return}catch(u){return ze(u)}},a,o)}const zg={throws:_g,isError:ka},Of={assert:zg,check:{throws:Vg,isError(e,t){return ll(e,t)}},assertWrap:{throws:Ug,isError(e,t,r){return Sa(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:Wg,isError(e,t){if(ll(e,t))return e}},waitUntil:{throws:qg,isError:$(ka)}},nr=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,oo={isUuid(e,t){if(!String(e).match(nr))throw new f(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(nr))throw new f(`'${String(e)}' is a UUID.`,t)}},_f={assert:oo,check:{isUuid(e){return!!String(e).match(nr)},isNotUuid(e){return!String(e).match(nr)}},assertWrap:{isUuid(e,t){if(!String(e).match(nr))throw new f(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(nr))throw new f(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(nr))return e},isNotUuid(e){if(!String(e).match(nr))return e}},waitUntil:{isUuid:$(oo.isUuid),isNotUuid:$(oo.isNotUuid)}},Kg={...Tf.assert,...mf.assert,...pf.assert,...yf.assert,...gf.assert,...kf.assert,...Sf.assert,...wf.assert,...xf.assert,...Ff.assert,...Nf.assert,...Mf.assert,...Bf.assert,...Pf.assert,...If.assert,...Rf.assert,...Lf.assert,...Cf.assert,...Of.assert,..._f.assert,...$f.assert},xa=[mf,pf,yf,gf,kf,Sf,wf,xf,Ff,Tf,Nf,Mf,Bf,Pf,If,Rf,Lf,Cf,Of,_f,$f],Gg=Object.assign({},...xa.map(e=>e.check)),E=Object.assign(function(t){return!!t},Gg);function Zg(e,t,r){return Vs(e,t,r,new Set)}function Vs(e,t,r,n){if(e=cl(e),t=cl(t),E.isObject(e)&&E.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Vs(X(e).sort(),X(t).sort(),r,n))return!1;let s=!1;const i=X(e).map(o=>{const a=Vs(e[o],t[o],r,n);return E.isPromise(a)&&(s=!0),a});return dl(s,i)}else if(E.isArray(e)&&E.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let s=!1;const i=e.map((o,a)=>{const u=Vs(o,t[a],r,n);return E.isPromise(u)&&(s=!0),u});return dl(s,i)}else return r(e,t)}function cl(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function dl(e,t){return e?new Promise(async(r,n)=>{try{const s=await Promise.all(t);r(s.every(E.isTrue))}catch(s){n(ze(s))}}):t.every(E.isTrue)}const Yg=Object.assign({},...xa.map(e=>e.assertWrap)),nn=Object.assign(function(t,r){if(!t)throw new f("Assertion failed.",r);return t},Yg);function Jg(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const Hg={tsType:Jg},Qg={assert:Hg},Xg={fail:e=>{throw new f("Failure triggered.",e)}},e1={...Qg.assert,...Kg,...Xg},pr=Object.assign(function(t,r){if(!t)throw new f("Assertion failed.",r)},e1),t1=Object.assign({},...xa.map(e=>e.checkWrap)),r1=Object.assign(function(t){if(t)return t},t1);function n1(e,t){return E.hasKey(e,"entryType")&&e.entryType===t}function Lr(e,t){return e.controlType===t}var Z=(e=>(e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text",e))(Z||{});const Vf=Symbol("any-type"),s1={checkbox:!1,color:"",dropdown:"",hidden:Vf,number:0,text:""};function i1(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,s])=>{const i=s1[s.controlType];i!==Vf&&(typeof i!=typeof s.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${s.initValue}': expected initValue of type ${typeof i} because the control is of type ${s.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function o1(e,t,r){const n=t;if(e.has(n))return e.get(n);{const s=r();return E.isPromise(s)?new Promise(async(i,o)=>{try{const a=await s;e.set(n,a),i(a)}catch(a){o(ze(a))}}):(e.set(n,s),s)}}function cs(e,t,r){if(t in e)return e[t];{const n=r();return E.isPromise(n)?new Promise(async(s,i)=>{try{const o=await n;e[t]=o,s(o)}catch(o){i(ze(o))}}):(e[t]=n,n)}}function Fa(e){return X(e).map(t=>[t,e[t]])}function zo(e){return Object.fromEntries(e)}function ds(e,t,r){return e.reduce((n,s,i,o)=>{const a=t(s,i,o);return r(a,s,i,o)&&n.push(a),n},[])}function a1(e,t=r=>r){const r=new Map;return e.filter(n=>{const s=t(n);return r.get(s)?!1:(r.set(s,n),!0)})}function u1({min:e,max:t}){const{min:r,max:n}=id({min:Math.floor(e),max:Math.floor(t)}),s=n-r+1,i=Math.ceil(Math.log2(s)),o=Math.ceil(i/8);if(o>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**o/s)*s,u=new Uint8Array(o);let l;do crypto.getRandomValues(u),l=u.reduce((c,d,m)=>c+d*256**m,0);while(l>=a);return r+l%s}const fl=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Uf(e=16){let t="";for(let r=0;r<e;r++){const n=u1({min:0,max:fl.length-1});t+=fl[n]}return t}function Wf(e){if(E.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>Ie(t).trim()).join(`
`))}function l1(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const c1="modulepreload",d1=function(e){return"/element-vir/vira/"+e},hl={},jf=function(t,r,n){let s=Promise.resolve();if(r&&r.length>0){let o=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),u=a?.nonce||a?.getAttribute("nonce");s=o(r.map(l=>{if(l=d1(l),l in hl)return;hl[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":c1,c||(m.as="script"),m.crossOrigin="",m.href=l,u&&m.setAttribute("nonce",u),document.head.appendChild(m),c)return new Promise((p,v)=>{m.addEventListener("load",p),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var ve;(function(e){e.Standard="stdout",e.Error="stderr"})(ve||(ve={}));var W;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(W||(W={}));async function f1(){return await ff({async[Kt.Node](){const e=(await jf(async()=>{const{default:t}=await import("./index-BkK8QNWG.js");return{default:t}},[])).default;return{[W.Bold]:e.bold.open,[W.Debug]:e.blueBright.open,[W.Error]:e.red.open,[W.Faint]:e.gray.open,[W.Info]:e.cyan.open,[W.Mutate]:e.magenta.open,[W.NormalWeight]:"\x1B[22m",[W.Plain]:"",[W.Reset]:e.reset.open,[W.Success]:e.green.open,[W.Warning]:e.yellow.open}},[Kt.Web](){return Promise.resolve({[W.Bold]:"font-weight: bold",[W.Debug]:"color: blue",[W.Error]:"color: red",[W.Faint]:"color: grey",[W.Info]:"color: teal",[W.Mutate]:"color: magenta",[W.NormalWeight]:"",[W.Plain]:"",[W.Reset]:"",[W.Success]:"color: green",[W.Warning]:"color: orange"})}})}const Ye=await f1(),h1={[W.Bold]:{colors:[Ye.bold],logType:ve.Standard},[W.Debug]:{colors:[Ye.debug],logType:ve.Standard},[W.Faint]:{colors:[Ye.faint],logType:ve.Standard},[W.Info]:{colors:[Ye.info],logType:ve.Standard},[W.Mutate]:{colors:[Ye.mutate,Ye.bold],logType:ve.Standard},[W.NormalWeight]:{colors:[Ye.normalWeight],logType:ve.Standard},[W.Plain]:{colors:[],logType:ve.Standard},[W.Reset]:{colors:[Ye.reset],logType:ve.Standard},[W.Success]:{colors:[Ye.success,Ye.bold],logType:ve.Standard},[W.Error]:{colors:[Ye.error,Ye.bold],logType:ve.Error},[W.Warning]:{colors:[Ye.warning],logType:ve.Error}},m1="px";function qf(e){return p1({value:e,suffix:m1})}function p1({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function g1({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function y1(){return await ff({async[Kt.Node](){const{inspect:e}=await jf(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const s=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),s.join(`
`),n.omitColors?"":n.colorConfig[W.Reset].colors.join("")].join(""),css:void 0}}},[Kt.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:ds(r.colorConfig[t].colors,o=>g1({value:o,suffix:";"}),E.isTruthy).join("; ");return{text:[e.map(o=>typeof o=="string"?o:o instanceof Error?Ie(o):h(o)).join(`
`),r.omitColors?"":r.colorConfig[W.Reset].colors.join("")].join(""),css:n}}}})}const w1=await y1();function tt({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Yr({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function v1(e,t){try{let r=!1;const n=Fa(e).map(([s,i])=>{const o=t(s,i,e);return o instanceof Promise?(r=!0,o):o?[o.key,o.value]:void 0}).filter(E.isTruthy);return r?new Promise(async(s,i)=>{try{const o=ds(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},E.isTruthy);s(zo(o))}catch(o){i(ze(o))}}):zo(n)}catch(r){throw ze(r)}}function b1(e,t){return v1(e,(r,n)=>{const s=n,i=t(n,e);return i instanceof Promise?i.then(o=>({key:s,value:o})):{key:s,value:i}})}function zf(e,...t){const r={...e};return t.forEach(n=>{n&&Fa(n).forEach(([s,i])=>{i!=null&&(r[s]=i)})}),r}const D1={colorConfig:h1,omitColors:!1},E1=Kf({[ve.Error](){},[ve.Standard](){}});function Kf(e,t){const r=zf(D1,t);function n(i){e[r.colorConfig[i.colorKey].logType](w1({...i,options:r}))}const s=b1(W,i=>(...o)=>n({args:o,colorKey:i}));return{...s,if(i){return i?s:E1}}}const A1=gg(Kt.Node)?{[ve.Error]({text:e}){process.stderr.write(e+`
`)},[ve.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[ve.Error]({text:e,css:t}){console.error(tt({value:e,prefix:"%c"}),t)},[ve.Standard]({text:e,css:t}){console.log(tt({value:e,prefix:"%c"}),t)}},C1=Kf(A1);function Gf(...e){const t=e.join(""),r=a1(Array.from(t));return Array.from(r).join("")}function $1(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Zf(e,t){const r=Gf([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return k1(e,r)}function k1(e,t){const r=Gf(t);return typeof e=="string"?new RegExp($1(e),r):new RegExp(e.source,r)}function Yf(e,{caseSensitive:t}){return Zf(e,"")}function S1({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const s=Zf(Yf(t,{caseSensitive:r}),"g"),i=[];return e.replace(s,(...o)=>{const a=o[o.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=o[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);i.push({index:a,length:u.length});const l=o[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),i}function x1(e,t,{caseSensitive:r}){const n=S1({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),s=Yf(t,{caseSensitive:r});return e.split(s).reduce((o,a,u)=>{const l=n[u],c=o.concat(a);if(l){const d=e.slice(l.index,l.index+l.length);return c.concat(d)}else return c},[])}function F1(e,t){return e.split(t)}function ml(e,t){const{min:r,max:n}=id(t);if(t.takeOverflow){const s=n-r+1,i=(e-r)%s;return i<0?r+s+i:r+i}else return e>n?r:e<r?n:e}function Re(e,t){let r=!1;const n=X(e).reduce((s,i)=>{const o=t(i,e[i],e);return o instanceof Promise&&(r=!0),s[i]=o,s},{});return r?new Promise(async(s,i)=>{try{await Promise.all(X(n).map(async o=>{const a=await n[o];n[o]=a})),s(n)}catch(o){i(ze(o))}}):n}function bi(e,t){const r=Fa(e).filter(([n,s])=>t(n,s,e));return zo(r)}function T1(e,t){return bi(e,r=>!t.includes(r))}function N1(e,t){return bi(e,r=>t.includes(r))}function Ko(e){return X(e).map(t=>e[t])}function M1(e,t){return t.capitalizeFirstLetter?B1(e):e}function B1(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const P1={capitalizeFirstLetter:!1};var sn;(function(e){e.Upper="upper",e.Lower="lower"})(sn||(sn={}));function I1(e){return e.toLowerCase()!==e.toUpperCase()}function pl(e,t,r){if(!e&&r?.rejectNoCaseCharacters)return!1;for(const n of e)if(I1(n)){if(t===sn.Upper&&n!==n.toUpperCase()||t===sn.Lower&&n!==n.toLowerCase())return!1}else{if(r?.rejectNoCaseCharacters)return!1;continue}return!0}function R1(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return M1(n,zf(P1,t))}function L1(e){return e.split("").reduce((r,n,s,i)=>{const o=s>0&&i[s-1]||"",a=s<i.length-1&&i[s+1]||"",u=pl(o,sn.Lower,{rejectNoCaseCharacters:!0})||pl(a,sn.Lower,{rejectNoCaseCharacters:!0});return n===n.toLowerCase()||s===0||!u?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function O1(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function Jf(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function gr(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function Hf(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class _1{listeners={};universalListeners=new Map;getListenerCount(){return Ko(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function s(i,o){r.once&&n(),t(i,o)}return this.universalListeners.set(t,{listener:s,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const s=E.isString(t)?t:t.type,i=()=>this.listeners[s]?.delete(r)||!1;function o(a,u){n.once&&i(),r(a,u)}return cs(this.listeners,s,()=>new Map).set(r,{listener:o,removeListener:i}),i}removeListener(t,r){const n=E.isString(t)?t:t.type,s=this.listeners[n];if(!s)return!1;const i=s.get(r);return i?i.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(s=>{s.listener(t,s.removeListener)}),this.universalListeners.forEach(s=>{s.listener(t,s.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=Ko(this.listeners).reduce((n,s)=>{const i=s.size||0;return s.clear(),n+i},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class Ta extends _1{}function Qf(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function gl(e,t,r){return Qf(globalThis,e,t,r)}function Na(e,t){return Xs(e.title),e.parent?[...Na(e.parent),Xs(e.parent.title)].concat([]):[]}function Xs(e){return Jf(e).toLowerCase().replaceAll(/\s/g,"-")}function V1({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const U1={[ke.ElementExample]:()=>[],[ke.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...i1(e.controls,e.title)].filter(E.isTruthy),[ke.Root]:()=>[]},ei="_isBookTreeNode",Xf=new Map;function W1(e){return Xf.get(e)}function j1(e,t){o1(Xf,e,()=>t)}function Jr(e,t){return!!(eh(e)&&e.entry.entryType===t)}function eh(e){return!!(E.hasKeys(e,[ei,"entry"])&&e[ei])}function q1(){return{[ei]:!0,entry:{entryType:ke.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function z1({entries:e,debug:t}){const r=W1(e);if(r)return r;const n=q1();e.forEach(o=>Ma({tree:n,newEntry:o,debug:t,manuallyAdded:!0}));const s=th(n),i={tree:n,flattenedNodes:s};return j1(e,i),t&&console.info("element-book tree:",n),i}function K1(e,t,r){if(!t.parent)return e;const n=Go(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Ma({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const s=Go(t,e);if(!s)throw new Error(`Failed to find node despite having just added it: ${Na(t).join(" > ")}`);return s}function Ma({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const s=U1[t.entryType](t);t.errors.push(...s);const i=K1(e,t,r),o=Xs(t.title),a=i.children[o];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${o}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[ei]:!0,children:{},urlBreadcrumb:o,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,o],entry:t,manuallyAdded:n};i.children[o]=u,n1(t,ke.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>Ma({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function Go(e,t){const r=eh(e)?e.fullUrlBreadcrumbs.slice(0,-1):Na(e);return r.length?r.reduce((s,i)=>{if(s)return s.children[i]},t):void 0}function th(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(s=>th(s));return[e,...r].flat()}function Ba(e,t){return Pa(e,["",...t],void 0)}function Pa(e,t,r){const n=t.slice(1),s=n[0];!s&&r&&(e.controls=r);const i=e.children[s||""],o=i&&Pa(i,n,r);return{...e.controls,...o}}function G1(e,t,r){const n={...e};return Pa(n,["",...t],r),n}function rh(e,t){const r=t?.controls||(Jr(e,ke.Page)?Re(e.entry.controls,(s,i)=>i.initValue):{});return{children:Re(e.children,(s,i)=>rh(i,t?.children?.[i.urlBreadcrumb])),controls:r}}function Le(e){const t={...e,entryType:ke.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const s={...n,entryType:ke.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(E.isTruthy)};r.add(n.title),t.elementExamples[Xs(s.title)]=s}}),t}var yt=(e=>(e.Search="search",e.Book="book",e))(yt||{});function Zo(e){return e[0]==="book"?"":e[1]?decodeURIComponent(e[1]):""}const on={hash:void 0,paths:["book"],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Us=globalThis,Ia=Us.ShadowRoot&&(Us.ShadyCSS===void 0||Us.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ra=Symbol(),yl=new WeakMap;let nh=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Ra)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ia&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=yl.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&yl.set(r,t))}return t}toString(){return this.cssText}};const me=e=>new nh(typeof e=="string"?e:e+"",void 0,Ra),Ws=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,s,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new nh(r,e,Ra)},Z1=(e,t)=>{if(Ia)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),s=Us.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,e.appendChild(n)}},wl=Ia?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return me(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Y1,defineProperty:J1,getOwnPropertyDescriptor:H1,getOwnPropertyNames:Q1,getOwnPropertySymbols:X1,getPrototypeOf:ey}=Object,Di=globalThis,vl=Di.trustedTypes,ty=vl?vl.emptyScript:"",ry=Di.reactiveElementPolyfillSupport,_n=(e,t)=>e,ti={toAttribute(e,t){switch(t){case Boolean:e=e?ty:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},La=(e,t)=>!Y1(e,t),bl={attribute:!0,type:String,converter:ti,reflect:!1,useDefault:!1,hasChanged:La};Symbol.metadata??=Symbol("metadata"),Di.litPropertyMetadata??=new WeakMap;let jr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=bl){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(t,n,r);s!==void 0&&J1(this.prototype,t,s)}}static getPropertyDescriptor(t,r,n){const{get:s,set:i}=H1(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:s,set(o){const a=s?.call(this);i?.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??bl}static _$Ei(){if(this.hasOwnProperty(_n("elementProperties")))return;const t=ey(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_n("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_n("properties"))){const r=this.properties,n=[...Q1(r),...X1(r)];for(const s of n)this.createProperty(s,r[s])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,s]of r)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const s=this._$Eu(r,n);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const s of n)r.unshift(wl(s))}else t!==void 0&&r.push(wl(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Z1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){const i=(n.converter?.toAttribute!==void 0?n.converter:ti).toAttribute(r,n.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,r){const n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=n.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:ti;this._$Em=s,this[s]=o.fromAttribute(r,i.type)??this._$Ej?.get(s)??null,this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){const s=this.constructor,i=this[t];if(n??=s.getPropertyOptions(t),!((n.hasChanged??La)(i,r)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:s,wrapped:i},o){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??r??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,i]of n){const{wrapped:o}=i,a=this[s];o!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,i,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};jr.elementStyles=[],jr.shadowRootOptions={mode:"open"},jr[_n("elementProperties")]=new Map,jr[_n("finalized")]=new Map,ry?.({ReactiveElement:jr}),(Di.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oa=globalThis,ri=Oa.trustedTypes,Dl=ri?ri.createPolicy("lit-html",{createHTML:e=>e}):void 0,sh="$lit$",ir=`lit$${Math.random().toFixed(9).slice(2)}$`,ih="?"+ir,ny=`<${ih}>`,Mr=document,Yn=()=>Mr.createComment(""),Jn=e=>e===null||typeof e!="object"&&typeof e!="function",_a=Array.isArray,sy=e=>_a(e)||typeof e?.[Symbol.iterator]=="function",ao=`[ 	
\f\r]`,Sn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,El=/-->/g,Al=/>/g,Cr=RegExp(`>|${ao}(?:([^\\s"'>=/]+)(${ao}*=${ao}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Cl=/'/g,$l=/"/g,oh=/^(?:script|style|textarea|title)$/i,iy=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),oy=iy(1),rt=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),kl=new WeakMap,Fr=Mr.createTreeWalker(Mr,129);function ah(e,t){if(!_a(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dl!==void 0?Dl.createHTML(t):t}const ay=(e,t)=>{const r=e.length-1,n=[];let s,i=t===2?"<svg>":t===3?"<math>":"",o=Sn;for(let a=0;a<r;a++){const u=e[a];let l,c,d=-1,m=0;for(;m<u.length&&(o.lastIndex=m,c=o.exec(u),c!==null);)m=o.lastIndex,o===Sn?c[1]==="!--"?o=El:c[1]!==void 0?o=Al:c[2]!==void 0?(oh.test(c[2])&&(s=RegExp("</"+c[2],"g")),o=Cr):c[3]!==void 0&&(o=Cr):o===Cr?c[0]===">"?(o=s??Sn,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,l=c[1],o=c[3]===void 0?Cr:c[3]==='"'?$l:Cl):o===$l||o===Cl?o=Cr:o===El||o===Al?o=Sn:(o=Cr,s=void 0);const p=o===Cr&&e[a+1].startsWith("/>")?" ":"";i+=o===Sn?u+ny:d>=0?(n.push(l),u.slice(0,d)+sh+u.slice(d)+ir+p):u+ir+(d===-2?a:p)}return[ah(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Hn{constructor({strings:t,_$litType$:r},n){let s;this.parts=[];let i=0,o=0;const a=t.length-1,u=this.parts,[l,c]=ay(t,r);if(this.el=Hn.createElement(l,n),Fr.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=Fr.nextNode())!==null&&u.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(sh)){const m=c[o++],p=s.getAttribute(d).split(ir),v=/([.?@])?(.*)/.exec(m);u.push({type:1,index:i,name:v[2],strings:p,ctor:v[1]==="."?ly:v[1]==="?"?cy:v[1]==="@"?dy:Ei}),s.removeAttribute(d)}else d.startsWith(ir)&&(u.push({type:6,index:i}),s.removeAttribute(d));if(oh.test(s.tagName)){const d=s.textContent.split(ir),m=d.length-1;if(m>0){s.textContent=ri?ri.emptyScript:"";for(let p=0;p<m;p++)s.append(d[p],Yn()),Fr.nextNode(),u.push({type:2,index:++i});s.append(d[m],Yn())}}}else if(s.nodeType===8)if(s.data===ih)u.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(ir,d+1))!==-1;)u.push({type:7,index:i}),d+=ir.length-1}i++}}static createElement(t,r){const n=Mr.createElement("template");return n.innerHTML=t,n}}function an(e,t,r=e,n){if(t===rt)return t;let s=n!==void 0?r._$Co?.[n]:r._$Cl;const i=Jn(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=s:r._$Cl=s),s!==void 0&&(t=an(e,s._$AS(e,t.values),s,n)),t}let uy=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,s=(t?.creationScope??Mr).importNode(r,!0);Fr.currentNode=s;let i=Fr.nextNode(),o=0,a=0,u=n[0];for(;u!==void 0;){if(o===u.index){let l;u.type===2?l=new bn(i,i.nextSibling,this,t):u.type===1?l=new u.ctor(i,u.name,u.strings,this,t):u.type===6&&(l=new fy(i,this,t)),this._$AV.push(l),u=n[++a]}o!==u?.index&&(i=Fr.nextNode(),o++)}return Fr.currentNode=Mr,s}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class bn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=an(this,t,r),Jn(t)?t===K||t==null||t===""?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==rt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):sy(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&Jn(this._$AH)?this._$AA.nextSibling.data=t:this.T(Mr.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Hn.createElement(ah(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(r);else{const i=new uy(s,this),o=i.u(this.options);i.p(r),this.T(o),this._$AH=i}}_$AC(t){let r=kl.get(t.strings);return r===void 0&&kl.set(t.strings,r=new Hn(t)),r}k(t){_a(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const i of t)s===r.length?r.push(n=new bn(this.O(Yn()),this.O(Yn()),this,this.options)):n=r[s],n._$AI(i),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ei{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,s,i){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=K}_$AI(t,r=this,n,s){const i=this.strings;let o=!1;if(i===void 0)t=an(this,t,r,0),o=!Jn(t)||t!==this._$AH&&t!==rt,o&&(this._$AH=t);else{const a=t;let u,l;for(t=i[0],u=0;u<i.length-1;u++)l=an(this,a[n+u],r,u),l===rt&&(l=this._$AH[u]),o||=!Jn(l)||l!==this._$AH[u],l===K?t=K:t!==K&&(t+=(l??"")+i[u+1]),this._$AH[u]=l}o&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ly extends Ei{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class cy extends Ei{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class dy extends Ei{constructor(t,r,n,s,i){super(t,r,n,s,i),this.type=5}_$AI(t,r=this){if((t=an(this,t,r,0)??K)===rt)return;const n=this._$AH,s=t===K&&n!==K||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==K&&(n===K||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class fy{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){an(this,t)}}const hy={I:bn},my=Oa.litHtmlPolyfillSupport;my?.(Hn,bn),(Oa.litHtmlVersions??=[]).push("3.3.0");const py=(e,t,r)=>{const n=r?.renderBefore??t;let s=n._$litPart$;if(s===void 0){const i=r?.renderBefore??null;n._$litPart$=s=new bn(t.insertBefore(Yn(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Va=globalThis;let Vn=class extends jr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=py(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return rt}};Vn._$litElement$=!0,Vn.finalized=!0,Va.litElementHydrateSupport?.({LitElement:Vn});const gy=Va.litElementPolyfillSupport;gy?.({LitElement:Vn});(Va.litElementVersions??=[]).push("4.2.0");function yr(e){if(E.isObject(e))return Re(e,(r,n)=>{if(!E.isString(r))throw new TypeError(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(L1(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,o=r.startsWith("--")?me(r):r.startsWith("-")?Ws`-${me(r)}`:Ws`--${me(r)}`;return{name:o,value:Ws`var(${o}, ${me(i)})`,default:String(i)}});throw new TypeError(`Invalid setup input for '${yr.name}' function.`)}function yy({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}const J=yr({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),wy={nav:{hover:{background:J["element-book-nav-hover-background-color"],foreground:J["element-book-nav-hover-foreground-color"]},active:{background:J["element-book-nav-active-background-color"],foreground:J["element-book-nav-active-foreground-color"]},selected:{background:J["element-book-nav-selected-background-color"],foreground:J["element-book-nav-selected-foreground-color"]}},accent:{icon:J["element-book-accent-icon-color"]},page:{background:J["element-book-page-background-color"],backgroundFaint1:J["element-book-page-background-faint-level-1-color"],backgroundFaint2:J["element-book-page-background-faint-level-2-color"],foreground:J["element-book-page-foreground-color"],foregroundFaint1:J["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:J["element-book-page-foreground-faint-level-2-color"]}};function vy(e,t){uh(e,t,wy)}function Yo(e){return E.hasKey(e,"_$cssResult$")}function Sl(e){return E.hasKeys(e,["name","value","default"])&&E.isString(e.default)&&Yo(e.name)&&Yo(e.value)}function uh(e,t,r){Object.entries(t).forEach(([n,s])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(Yo(s)){if(!Sl(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);yy({forCssVar:i,onElement:e,toValue:String(s)})}else{if(Sl(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);uh(e,s,i)}})}function ue(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(o=>[o]));let n=t[0].length,s=t[0].map((o,a)=>t.map(u=>u[a])),i=e.map(o=>s.map(a=>{let u=0;if(!Array.isArray(o)){for(let l of a)u+=o*l;return u}for(let l=0;l<o.length;l++)u+=o[l]*(a[l]||0);return u}));return r===1&&(i=i[0]),n===1?i.map(o=>o[0]):i}function fs(e){return ur(e)==="string"}function ur(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function ni(e,{precision:t,unit:r}){return cr(e)?"none":lh(e,t)+(r??"")}function cr(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function ge(e){return cr(e)?0:e}function lh(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const s=10**(t-n);return Math.floor(e*s+.5)/s}const by={deg:1,grad:.9,rad:180/Math.PI,turn:360};function ch(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,s=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let i=e.match(t);if(i){let o=[];return i[2].replace(s,(a,u)=>{let l=u.match(n),c=u;if(l){let d=l[0],m=c.slice(0,-d.length);d==="%"?(c=new Number(m/100),c.type="<percentage>"):(c=new Number(m*by[d]),c.type="<angle>",c.unit=d)}else r.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);a.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=u),o.push(c)}),{name:i[1].toLowerCase(),rawName:i[1],rawArgs:i[2],args:o}}}function dh(e){return e[e.length-1]}function Qn(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function fh(e,t,r){return(r-e)/(t-e)}function Ua(e,t,r){return Qn(t[0],t[1],fh(e[0],e[1],r))}function hh(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let s=new String(n[1]);return s.range=[+n[2],+n[3]],s}return r}))}function mh(e,t,r){return Math.max(Math.min(r,t),e)}function Ai(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function Ct(e,t){return Ai(Math.abs(e)**t,e)}function Wa(e,t){return t===0?0:e/t}function ph(e,t,r=0,n=e.length){for(;r<n;){const s=r+n>>1;e[s]<t?r=s+1:n=s}return r}var Dy=Object.freeze({__proto__:null,bisectLeft:ph,clamp:mh,copySign:Ai,interpolate:Qn,interpolateInv:fh,isNone:cr,isString:fs,last:dh,mapRange:Ua,multiplyMatrices:ue,parseCoordGrammar:hh,parseFunction:ch,serializeNumber:ni,skipNone:ge,spow:Ct,toPrecision:lh,type:ur,zdiv:Wa});class Ey{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(s){this[s]=this[s]||[],r&&this[s][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const dr=new Ey;var nt={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const Me={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Jo(e){return Array.isArray(e)?e:Me[e]}function si(e,t,r,n={}){if(e=Jo(e),t=Jo(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let s={W1:e,W2:t,XYZ:r,options:n};if(dr.run("chromatic-adaptation-start",s),s.M||(s.W1===Me.D65&&s.W2===Me.D50?s.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:s.W1===Me.D50&&s.W2===Me.D65&&(s.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),dr.run("chromatic-adaptation-end",s),s.M)return ue(s.M,s.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Ay=new Set(["<number>","<percentage>","<angle>"]);function xl(e,t,r,n){return Object.entries(e.coords).map(([i,o],a)=>{let u=t.coordGrammar[a],l=n[a],c=l?.type,d;if(l.none?d=u.find(v=>Ay.has(v)):d=u.find(v=>v==c),!d){let v=o.name||i;throw new TypeError(`${c??l.raw} not allowed for ${v} in ${r}()`)}let m=d.range;c==="<percentage>"&&(m||=[0,1]);let p=o.range||o.refRange;return m&&p&&(n[a]=Ua(m,p,n[a])),d})}function gh(e,{meta:t}={}){let r={str:String(e)?.trim()};if(dr.run("parse-start",r),r.color)return r.color;if(r.parsed=ch(r.str),r.parsed){let n=r.parsed.name;if(n==="color"){let s=r.parsed.args.shift(),i=s.startsWith("--")?s.substring(2):`--${s}`,o=[s,i],a=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let c of T.all){let d=c.getFormat("color");if(d&&(o.includes(d.id)||d.ids?.filter(m=>o.includes(m)).length)){const m=Object.keys(c.coords).map((v,w)=>r.parsed.args[w]||0);let p;return d.coordGrammar&&(p=xl(c,d,"color",m)),t&&Object.assign(t,{formatId:"color",types:p}),d.id.startsWith("--")&&!s.startsWith("--")&&nt.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${d.id}) instead of color(${s}).`),s.startsWith("--")&&!d.id.startsWith("--")&&nt.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${d.id}) instead of prefixed color(${s}).`),{spaceId:c.id,coords:m,alpha:a}}}let u="",l=s in T.registry?s:i;if(l in T.registry){let c=T.registry[l].formats?.color?.id;c&&(u=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${s}). `+(u||"Missing a plugin?"))}else for(let s of T.all){let i=s.getFormat(n);if(i&&i.type==="function"){let o=1;(i.lastAlpha||dh(r.parsed.args).alpha)&&(o=r.parsed.args.pop());let a=r.parsed.args,u;return i.coordGrammar&&(u=xl(s,i,n,a)),t&&Object.assign(t,{formatId:i.name,types:u}),{spaceId:s.id,coords:a,alpha:o}}}}else for(let n of T.all)for(let s in n.formats){let i=n.formats[s];if(i.type!=="custom"||i.test&&!i.test(r.str))continue;let o=i.parse(r.str);if(o)return o.alpha??=1,t&&(t.formatId=s),o}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function V(e){if(Array.isArray(e))return e.map(V);if(!e)throw new TypeError("Empty color reference");fs(e)&&(e=gh(e));let t=e.space||e.spaceId;return t instanceof T||(e.space=T.get(t)),e.alpha===void 0&&(e.alpha=1),e}const Cy=75e-6;class T{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?T.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Jo(n),this.formats=t.formats??{};for(let s in this.formats){let i=this.formats[s];i.type||="function",i.name||=s}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:T.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(s,i)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:$y(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),dr.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Cy}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((s,i)=>{let o=n[i];if(o.type!=="angle"&&o.range){if(Number.isNaN(s))return!0;let[a,u]=o.range;return(a===void 0||s>=a-r)&&(u===void 0||s<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Fl(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Fl(r,this),r):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=V(t);[t,r]=[a.space,a.coords]}if(t=T.get(t),this.equals(t))return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=this.path,s=t.path,i,o;for(let a=0;a<n.length&&n[a].equals(s[a]);a++)i=n[a],o=a;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>o;a--)r=n[a].toBase(r);for(let a=o+1;a<s.length;a++)r=s[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=V(t);[t,r]=[n.space,n.coords]}return t=T.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],s=n.range||n.refRange;t.push(s?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(T.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof T)return t;if(ur(t)==="string"){let s=T.registry[t.toLowerCase()];if(!s)throw new TypeError(`No color space found with id = "${t}"`);return s}if(r.length)return T.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){let n=ur(t),s,i;if(n==="string"?t.includes(".")?[s,i]=t.split("."):[s,i]=[,t]:Array.isArray(t)?[s,i]=t:(s=t.space,i=t.coordId),s=T.get(s),s||(s=r),!s)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ur(i),n==="number"||n==="string"&&i>=0){let u=Object.entries(s.coords)[i];if(u)return{space:s,id:u[0],index:i,...u[1]}}s=T.get(s);let o=i.toLowerCase(),a=0;for(let u in s.coords){let l=s.coords[u];if(u.toLowerCase()===o||l.name?.toLowerCase()===o)return{space:s,id:u,index:a,...l};a++}throw new TypeError(`No "${i}" coordinate found in ${s.name}. Its coordinates are: ${Object.keys(s.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function $y(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Fl(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=hh(e.coords);let r=Object.entries(t).map(([n,s],i)=>{let o=e.coordGrammar[i][0],a=s.range||s.refRange,u=o.range,l="";return o=="<percentage>"?(u=[0,100],l="%"):o=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(n,s)=>n.map((i,o)=>{let{fromRange:a,toRange:u,suffix:l}=r[o];return a&&u&&(i=Ua(a,u,i)),i=ni(i,{precision:s,unit:l}),i})}return e}var Ee=new T({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Ke extends T{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=Ee),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=ue(t.toXYZ_M,r);return this.white!==this.base.white&&(n=si(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=si(this.base.white,this.white,r),ue(t.fromXYZ_M,r))),t.referred??="display",super(t)}}function hs(e,t){return e=V(e),!t||e.space.equals(t)?e.coords.slice():(t=T.get(t),t.from(e))}function Qe(e,t){e=V(e);let{space:r,index:n}=T.resolveCoord(t,e.space);return hs(e,r)[n]}function ja(e,t,r){return e=V(e),t=T.get(t),e.coords=t.to(e.space,r),e}ja.returns="color";function Gt(e,t,r){if(e=V(e),arguments.length===2&&ur(arguments[1])==="object"){let n=arguments[1];for(let s in n)Gt(e,s,n[s])}else{typeof r=="function"&&(r=r(Qe(e,t)));let{space:n,index:s}=T.resolveCoord(t,e.space),i=hs(e,n);i[s]=r,ja(e,n,i)}return e}Gt.returns="color";var qa=new T({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Ee,fromBase:e=>si(Ee.white,"D50",e),toBase:e=>si("D50",Ee.white,e)});const ky=216/24389,Tl=24/116,Ss=24389/27;let uo=Me.D50;var Xe=new T({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:uo,base:qa,fromBase(e){let r=e.map((n,s)=>n/uo[s]).map(n=>n>ky?Math.cbrt(n):(Ss*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Tl?Math.pow(t[0],3):(116*t[0]-16)/Ss,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ss,t[2]>Tl?Math.pow(t[2],3):(116*t[2]-16)/Ss].map((n,s)=>n*uo[s])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function St(e){return(e%360+360)%360}function Sy(e,t){if(e==="raw")return t;let[r,n]=t.map(St),s=n-r;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(r+=360):e==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):e==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var Xn=new T({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Xe,fromBase(e){let[t,r,n]=e,s;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),St(s)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Nl=25**7,ii=Math.PI,Ml=180/ii,Or=ii/180;function Bl(e){const t=e*e;return t*t*t*e}function yh(e,t,{kL:r=1,kC:n=1,kH:s=1}={}){[e,t]=V([e,t]);let[i,o,a]=Xe.from(e),u=Xn.from(Xe,[i,o,a])[1],[l,c,d]=Xe.from(t),m=Xn.from(Xe,[l,c,d])[1];u<0&&(u=0),m<0&&(m=0);let p=(u+m)/2,v=Bl(p),w=.5*(1-Math.sqrt(v/(v+Nl))),A=(1+w)*o,D=(1+w)*c,S=Math.sqrt(A**2+a**2),M=Math.sqrt(D**2+d**2),L=A===0&&a===0?0:Math.atan2(a,A),z=D===0&&d===0?0:Math.atan2(d,D);L<0&&(L+=2*ii),z<0&&(z+=2*ii),L*=Ml,z*=Ml;let Se=l-i,ft=M-S,Oe=z-L,Ze=L+z,Et=Math.abs(Oe),Ft;S*M===0?Ft=0:Et<=180?Ft=Oe:Oe>180?Ft=Oe-360:Oe<-180?Ft=Oe+360:nt.warn("the unthinkable has happened");let ws=2*Math.sqrt(M*S)*Math.sin(Ft*Or/2),K0=(i+l)/2,Oi=(S+M)/2,du=Bl(Oi),Tt;S*M===0?Tt=Ze:Et<=180?Tt=Ze/2:Ze<360?Tt=(Ze+360)/2:Tt=(Ze-360)/2;let fu=(K0-50)**2,G0=1+.015*fu/Math.sqrt(20+fu),hu=1+.045*Oi,Dn=1;Dn-=.17*Math.cos((Tt-30)*Or),Dn+=.24*Math.cos(2*Tt*Or),Dn+=.32*Math.cos((3*Tt+6)*Or),Dn-=.2*Math.cos((4*Tt-63)*Or);let mu=1+.015*Oi*Dn,Z0=30*Math.exp(-1*((Tt-275)/25)**2),Y0=2*Math.sqrt(du/(du+Nl)),J0=-1*Math.sin(2*Z0*Or)*Y0,vs=(Se/(r*G0))**2;return vs+=(ft/(n*hu))**2,vs+=(ws/(s*mu))**2,vs+=J0*(ft/(n*hu))*(ws/(s*mu)),Math.sqrt(vs)}const xy=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Fy=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Ty=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Ny=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var un=new T({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Ee,fromBase(e){let r=ue(xy,e).map(n=>Math.cbrt(n));return ue(Ty,r)},toBase(e){let r=ue(Ny,e).map(n=>n**3);return ue(Fy,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Ho(e,t){[e,t]=V([e,t]);let[r,n,s]=un.from(e),[i,o,a]=un.from(t),u=r-i,l=n-o,c=s-a;return Math.sqrt(u**2+l**2+c**2)}const My=75e-6;function Nr(e,t,{epsilon:r=My}={}){e=V(e),t||(t=e.space),t=T.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ln(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function wh(e,t,r="lab"){r=T.get(r);let n=r.from(e),s=r.from(t);return Math.sqrt(n.reduce((i,o,a)=>{let u=s[a];return isNaN(o)||isNaN(u)?i:i+(u-o)**2},0))}function By(e,t){return wh(e,t,"lab")}const Py=Math.PI,Pl=Py/180;function Iy(e,t,{l:r=2,c:n=1}={}){[e,t]=V([e,t]);let[s,i,o]=Xe.from(e),[,a,u]=Xn.from(Xe,[s,i,o]),[l,c,d]=Xe.from(t),m=Xn.from(Xe,[l,c,d])[1];a<0&&(a=0),m<0&&(m=0);let p=s-l,v=a-m,w=i-c,A=o-d,D=w**2+A**2-v**2,S=.511;s>=16&&(S=.040975*s/(1+.01765*s));let M=.0638*a/(1+.0131*a)+.638,L;Number.isNaN(u)&&(u=0),u>=164&&u<=345?L=.56+Math.abs(.2*Math.cos((u+168)*Pl)):L=.36+Math.abs(.4*Math.cos((u+35)*Pl));let z=Math.pow(a,4),Se=Math.sqrt(z/(z+1900)),ft=M*(Se*L+1-Se),Oe=(p/(r*S))**2;return Oe+=(v/(n*M))**2,Oe+=D/ft**2,Math.sqrt(Oe)}const Il=203;var za=new T({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Ee,fromBase(e){return e.map(t=>Math.max(t*Il,0))},toBase(e){return e.map(t=>Math.max(t/Il,0))}});const xs=1.15,Fs=.66,Rl=2610/2**14,Ry=2**14/2610,Ll=3424/2**12,Ol=2413/2**7,_l=2392/2**7,Ly=1.7*2523/2**5,Vl=2**5/(1.7*2523),Ts=-.56,lo=16295499532821565e-27,Oy=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],_y=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Vy=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Uy=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var vh=new T({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:za,fromBase(e){let[t,r,n]=e,s=xs*t-(xs-1)*n,i=Fs*r-(Fs-1)*t,a=ue(Oy,[s,i,n]).map(function(m){let p=Ll+Ol*(m/1e4)**Rl,v=1+_l*(m/1e4)**Rl;return(p/v)**Ly}),[u,l,c]=ue(Vy,a);return[(1+Ts)*u/(1+Ts*u)-lo,l,c]},toBase(e){let[t,r,n]=e,s=(t+lo)/(1+Ts-Ts*(t+lo)),o=ue(Uy,[s,r,n]).map(function(m){let p=Ll-m**Vl,v=_l*m**Vl-Ol;return 1e4*(p/v)**Ry}),[a,u,l]=ue(_y,o),c=(a+(xs-1)*l)/xs,d=(u+(Fs-1)*c)/Fs;return[c,d,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Qo=new T({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:vh,fromBase(e){let[t,r,n]=e,s;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),St(s)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function Wy(e,t){[e,t]=V([e,t]);let[r,n,s]=Qo.from(e),[i,o,a]=Qo.from(t),u=r-i,l=n-o;Number.isNaN(s)&&Number.isNaN(a)?(s=0,a=0):Number.isNaN(s)?s=a:Number.isNaN(a)&&(a=s);let c=s-a,d=2*Math.sqrt(n*o)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+d**2)}const bh=3424/4096,Dh=2413/128,Eh=2392/128,Ul=2610/16384,jy=2523/32,qy=16384/2610,Wl=32/2523,zy=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Ky=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Gy=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Zy=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Xo=new T({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:za,fromBase(e){let t=ue(zy,e);return Yy(t)},toBase(e){let t=Jy(e);return ue(Zy,t)}});function Yy(e){let t=e.map(function(r){let n=bh+Dh*(r/1e4)**Ul,s=1+Eh*(r/1e4)**Ul;return(n/s)**jy});return ue(Ky,t)}function Jy(e){return ue(Gy,e).map(function(n){let s=Math.max(n**Wl-bh,0),i=Dh-Eh*n**Wl;return 1e4*(s/i)**qy})}function Hy(e,t){[e,t]=V([e,t]);let[r,n,s]=Xo.from(e),[i,o,a]=Xo.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-o)**2+(s-a)**2)}const Qy=Me.D65,Ah=.42,jl=1/Ah,co=2*Math.PI,Ch=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],Xy=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],e2=[[460,451,288],[460,-891,-261],[460,-220,-6300]],t2={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Sr={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},r2=180/Math.PI,ql=Math.PI/180;function $h(e,t){return e.map(n=>{const s=Ct(t*Math.abs(n)*.01,Ah);return 400*Ai(s,n)/(s+27.13)})}function n2(e,t){const r=100/t*27.13**jl;return e.map(n=>{const s=Math.abs(n);return Ai(r*Ct(s/(400-s),jl),n)})}function s2(e){let t=St(e);t<=Sr.h[0]&&(t+=360);const r=ph(Sr.h,t)-1,[n,s]=Sr.h.slice(r,r+2),[i,o]=Sr.e.slice(r,r+2),a=Sr.H[r],u=(t-n)/i;return a+100*u/(u+(s-t)/o)}function i2(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,s]=Sr.h.slice(r,r+2),[i,o]=Sr.e.slice(r,r+2);return St((t*(o*n-i*s)-100*n*o)/(t*(o-i)-100*o))}function kh(e,t,r,n,s){const i={};i.discounting=s,i.refWhite=e,i.surround=n;const o=e.map(w=>w*100);i.la=t,i.yb=r;const a=o[1],u=ue(Ch,o);n=t2[i.surround];const l=n[0];i.c=n[1],i.nc=n[2];const d=(1/(5*i.la+1))**4;i.fl=d*i.la+.1*(1-d)*(1-d)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/a,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const m=Math.max(Math.min(l*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=u.map(w=>Qn(1,a/w,m)),i.dRgbInv=i.dRgb.map(w=>1/w);const p=u.map((w,A)=>w*i.dRgb[A]),v=$h(p,i.fl);return i.aW=i.nbb*(2*v[0]+v[1]+.05*v[2]),i}const zl=kh(Qy,64/Math.PI*.2,20,"average",!1);function ea(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=St(e.h)*ql:r=i2(e.H)*ql;const n=Math.cos(r),s=Math.sin(r);let i=0;e.J!==void 0?i=Ct(e.J,1/2)*.1:e.Q!==void 0&&(i=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let o=0;e.C!==void 0?o=e.C/i:e.M!==void 0?o=e.M/t.flRoot/i:e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c);const a=Ct(o*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*Ct(i,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,d=l/t.nbb,m=23*(d+.305)*Wa(a,23*c+a*(11*n+108*s)),p=m*n,v=m*s,w=n2(ue(e2,[d,p,v]).map(A=>A*1/1403),t.fl);return ue(Xy,w.map((A,D)=>A*t.dRgbInv[D])).map(A=>A/100)}function Sh(e,t){const r=e.map(M=>M*100),n=$h(ue(Ch,r).map((M,L)=>M*t.dRgb[L]),t.fl),s=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,o=(Math.atan2(i,s)%co+co)%co,a=.25*(Math.cos(o+2)+3.8),u=5e4/13*t.nc*t.ncb*Wa(a*Math.sqrt(s**2+i**2),n[0]+n[1]+1.05*n[2]+.305),l=Ct(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*n[0]+n[1]+.05*n[2]),d=Ct(c/t.aW,.5*t.c*t.z),m=100*Ct(d,2),p=4/t.c*d*(t.aW+4)*t.flRoot,v=l*d,w=v*t.flRoot,A=St(o*r2),D=s2(A),S=50*Ct(t.c*l/(t.aW+4),1/2);return{J:m,C:v,h:A,s:S,Q:p,M:w,H:D}}var o2=new T({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ee,fromBase(e){const t=Sh(e,zl);return[t.J,t.M,t.h]},toBase(e){return ea({J:e[0],M:e[1],h:e[2]},zl)}});const a2=Me.D65,u2=216/24389,xh=24389/27;function l2(e){return 116*(e>u2?Math.cbrt(e):(xh*e+16)/116)-16}function ta(e){return e>8?Math.pow((e+16)/116,3):e/xh}function c2(e,t){let[r,n,s]=e,i=[],o=0;if(s===0)return[0,0,0];let a=ta(s);s>0?o=.00379058511492914*s**2+.608983189401032*s+.9155088574762233:o=9514440756550361e-21*s**2+.08693057439788597*s-21.928975842194614;const u=2e-12,l=15;let c=0,d=1/0;for(;c<=l;){i=ea({J:o,C:n,h:r},t);const m=Math.abs(i[1]-a);if(m<d){if(m<=u)return i;d=m}o=o-(i[1]-a)*o/(2*i[1]),c+=1}return ea({J:o,C:n,h:r},t)}function d2(e,t){const r=l2(e[1]);if(r===0)return[0,0,0];const n=Sh(e,Ka);return[St(n.h),n.C,r]}const Ka=kh(a2,200/Math.PI*ta(50),ta(50)*100,"average",!1);var es=new T({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Ee,fromBase(e){return d2(e)},toBase(e){return c2(e,Ka)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const f2=Math.PI/180,Kl=[1,.007,.0228];function Gl(e){e[1]<0&&(e=es.fromBase(es.toBase(e)));const t=Math.log(Math.max(1+Kl[2]*e[1]*Ka.flRoot,1))/Kl[2],r=e[0]*f2,n=t*Math.cos(r),s=t*Math.sin(r);return[e[2],n,s]}function h2(e,t){[e,t]=V([e,t]);let[r,n,s]=Gl(es.from(e)),[i,o,a]=Gl(es.from(t));return Math.sqrt((r-i)**2+(n-o)**2+(s-a)**2)}var cn={deltaE76:By,deltaECMC:Iy,deltaE2000:yh,deltaEJz:Wy,deltaEITP:Hy,deltaEOK:Ho,deltaEHCT:h2};function m2(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Zl={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function fr(e,{method:t=nt.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:s=2,blackWhiteClamp:i={}}={}){if(e=V(e),fs(arguments[1])?r=arguments[1]:r||(r=e.space),r=T.get(r),Nr(e,r,{epsilon:0}))return e;let o;if(t==="css")o=p2(e,{space:r});else{if(t!=="clip"&&!Nr(e,r)){Object.prototype.hasOwnProperty.call(Zl,t)&&({method:t,jnd:s,deltaEMethod:n,blackWhiteClamp:i}=Zl[t]);let a=yh;if(n!==""){for(let l in cn)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=cn[l];break}}let u=fr(ae(e,r),{method:"clip",space:r});if(a(e,u)>s){if(Object.keys(i).length===3){let S=T.resolveCoord(i.channel),M=Qe(ae(e,S.space),S.id);if(cr(M)&&(M=0),M>=i.max)return ae({space:"xyz-d65",coords:Me.D65},e.space);if(M<=i.min)return ae({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=T.resolveCoord(t),c=l.space,d=l.id,m=ae(e,c);m.coords.forEach((S,M)=>{cr(S)&&(m.coords[M]=0)});let v=(l.range||l.refRange)[0],w=m2(s),A=v,D=Qe(m,d);for(;D-A>w;){let S=ln(m);S=fr(S,{space:r,method:"clip"}),a(m,S)-s<w?A=Qe(m,d):D=Qe(m,d),Gt(m,d,(A+D)/2)}o=ae(m,r)}else o=u}else o=ae(e,r);if(t==="clip"||!Nr(o,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);o.coords=o.coords.map((u,l)=>{let[c,d]=a[l];return c!==void 0&&(u=Math.max(c,u)),d!==void 0&&(u=Math.min(u,d)),u})}}return r!==e.space&&(o=ae(o,e.space)),e.coords=o.coords,e}fr.returns="color";const Yl={WHITE:{space:un,coords:[1,0,0]},BLACK:{space:un,coords:[0,0,0]}};function p2(e,{space:t}={}){e=V(e),t||(t=e.space),t=T.get(t);const s=T.get("oklch");if(t.isUnbounded)return ae(e,t);const i=ae(e,s);let o=i.coords[0];if(o>=1){const v=ae(Yl.WHITE,t);return v.alpha=e.alpha,ae(v,t)}if(o<=0){const v=ae(Yl.BLACK,t);return v.alpha=e.alpha,ae(v,t)}if(Nr(i,t,{epsilon:0}))return ae(i,t);function a(v){const w=ae(v,t),A=Object.values(t.coords);return w.coords=w.coords.map((D,S)=>{if("range"in A[S]){const[M,L]=A[S].range;return mh(M,D,L)}return D}),w}let u=0,l=i.coords[1],c=!0,d=ln(i),m=a(d),p=Ho(m,d);if(p<.02)return m;for(;l-u>1e-4;){const v=(u+l)/2;if(d.coords[1]=v,c&&Nr(d,t,{epsilon:0}))u=v;else if(m=a(d),p=Ho(m,d),p<.02){if(.02-p<1e-4)break;c=!1,u=v}else l=v}return m}function ae(e,t,{inGamut:r}={}){e=V(e),t=T.get(t);let n=t.from(e),s={space:t,coords:n,alpha:e.alpha};return r&&(s=fr(s,r===!0?void 0:r)),s}ae.returns="color";function Un(e,{precision:t=nt.precision,format:r="default",inGamut:n=!0,...s}={}){let i;e=V(e);let o=r;r=e.space.getFormat(r)??e.space.getFormat("default")??T.DEFAULT_FORMAT;let a=e.coords.slice();if(n||=r.toGamut,n&&!Nr(e)&&(a=fr(ln(e),n===!0?void 0:n).coords),r.type==="custom")if(s.precision=t,r.serialize)i=r.serialize(a,e.alpha,s);else throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);else{let u=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,t):t!==null&&(a=a.map(m=>ni(m,{precision:t})));let l=[...a];if(u==="color"){let m=r.id||r.ids?.[0]||e.space.id;l.unshift(m)}let c=e.alpha;t!==null&&(c=ni(c,{precision:t}));let d=e.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${c}`;i=`${u}(${l.join(r.commas?", ":" ")}${d})`}return i}const g2=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],y2=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Ci=new Ke({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:g2,fromXYZ_M:y2});const Ns=1.09929682680944,Jl=.018053968510807;var Fh=new Ke({id:"rec2020",name:"REC.2020",base:Ci,toBase(e){return e.map(function(t){return t<Jl*4.5?t/4.5:Math.pow((t+Ns-1)/Ns,1/.45)})},fromBase(e){return e.map(function(t){return t>=Jl?Ns*Math.pow(t,.45)-(Ns-1):4.5*t})}});const w2=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],v2=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Th=new Ke({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:w2,fromXYZ_M:v2});const b2=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],be=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Nh=new Ke({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:b2,fromXYZ_M:be}),Hl={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Ql=Array(3).fill("<percentage> | <number>[0, 255]"),Xl=Array(3).fill("<number>[0, 255]");var dn=new Ke({id:"srgb",name:"sRGB",base:Nh,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Ql},rgb_number:{name:"rgb",commas:!0,coords:Xl,noAlpha:!0},color:{},rgba:{coords:Ql,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Xl},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Hl.black,t.alpha=0):t.coords=Hl[e],t.coords)return t}}}}),Mh=new Ke({id:"p3",cssId:"display-p3",name:"P3",base:Th,fromBase:dn.fromBase,toBase:dn.toBase});nt.display_space=dn;let D2;if(typeof CSS<"u"&&CSS.supports)for(let e of[Xe,Fh,Mh]){let t=e.getMinCoords(),n=Un({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){nt.display_space=e;break}}function E2(e,{space:t=nt.display_space,...r}={}){let n=Un(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!nt.display_space)n=new String(n),n.color=e;else{let s=e;if((e.coords.some(cr)||cr(e.alpha))&&!(D2??=CSS.supports("color","hsl(none 50% 50%)"))&&(s=ln(e),s.coords=s.coords.map(ge),s.alpha=ge(s.alpha),n=Un(s,r),CSS.supports("color",n)))return n=new String(n),n.color=s,n;s=ae(s,t),n=new String(Un(s,r)),n.color=s}return n}function A2(e,t){return e=V(e),t=V(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function hr(e){return Qe(e,[Ee,"y"])}function Bh(e,t){Gt(e,[Ee,"y"],t)}function C2(e){Object.defineProperty(e.prototype,"luminance",{get(){return hr(this)},set(t){Bh(this,t)}})}var $2=Object.freeze({__proto__:null,getLuminance:hr,register:C2,setLuminance:Bh});function k2(e,t){e=V(e),t=V(t);let r=Math.max(hr(e),0),n=Math.max(hr(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const S2=.56,x2=.57,F2=.62,T2=.65,ec=.022,N2=1.414,M2=.1,B2=5e-4,P2=1.14,tc=.027,I2=1.14;function rc(e){return e>=ec?e:e+(ec-e)**N2}function _r(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function R2(e,t){t=V(t),e=V(e);let r,n,s,i,o,a;t=ae(t,"srgb"),[i,o,a]=t.coords;let u=_r(i)*.2126729+_r(o)*.7151522+_r(a)*.072175;e=ae(e,"srgb"),[i,o,a]=e.coords;let l=_r(i)*.2126729+_r(o)*.7151522+_r(a)*.072175,c=rc(u),d=rc(l),m=d>c;return Math.abs(d-c)<B2?n=0:m?(r=d**S2-c**x2,n=r*P2):(r=d**T2-c**F2,n=r*I2),Math.abs(n)<M2?s=0:n>0?s=n-tc:s=n+tc,s*100}function L2(e,t){e=V(e),t=V(t);let r=Math.max(hr(e),0),n=Math.max(hr(t),0);n>r&&([r,n]=[n,r]);let s=r+n;return s===0?0:(r-n)/s}const O2=5e4;function _2(e,t){e=V(e),t=V(t);let r=Math.max(hr(e),0),n=Math.max(hr(t),0);return n>r&&([r,n]=[n,r]),n===0?O2:(r-n)/n}function V2(e,t){e=V(e),t=V(t);let r=Qe(e,[Xe,"l"]),n=Qe(t,[Xe,"l"]);return Math.abs(r-n)}const U2=216/24389,nc=24/116,Ms=24389/27;let fo=Me.D65;var ra=new T({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:fo,base:Ee,fromBase(e){let r=e.map((n,s)=>n/fo[s]).map(n=>n>U2?Math.cbrt(n):(Ms*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>nc?Math.pow(t[0],3):(116*t[0]-16)/Ms,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ms,t[2]>nc?Math.pow(t[2],3):(116*t[2]-16)/Ms].map((n,s)=>n*fo[s])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const ho=Math.pow(5,.5)*.5+.5;function W2(e,t){e=V(e),t=V(t);let r=Qe(e,[ra,"l"]),n=Qe(t,[ra,"l"]),s=Math.abs(Math.pow(r,ho)-Math.pow(n,ho)),i=Math.pow(s,1/ho)*Math.SQRT2-40;return i<7.5?0:i}var js=Object.freeze({__proto__:null,contrastAPCA:R2,contrastDeltaPhi:W2,contrastLstar:V2,contrastMichelson:L2,contrastWCAG21:k2,contrastWeber:_2});function j2(e,t,r={}){fs(r)&&(r={algorithm:r});let{algorithm:n,...s}=r;if(!n){let i=Object.keys(js).map(o=>o.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=V(e),t=V(t);for(let i in js)if("contrast"+n.toLowerCase()===i.toLowerCase())return js[i](e,t,s);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function $i(e){let[t,r,n]=hs(e,Ee),s=t+15*r+3*n;return[4*t/s,9*r/s]}function Ph(e){let[t,r,n]=hs(e,Ee),s=t+r+n;return[t/s,r/s]}function q2(e){Object.defineProperty(e.prototype,"uv",{get(){return $i(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Ph(this)}})}var z2=Object.freeze({__proto__:null,register:q2,uv:$i,xy:Ph});function Pn(e,t,r={}){fs(r)&&(r={method:r});let{method:n=nt.deltaE,...s}=r;for(let i in cn)if("deltae"+n.toLowerCase()===i.toLowerCase())return cn[i](e,t,s);throw new TypeError(`Unknown deltaE method: ${n}`)}function K2(e,t=.25){let n=[T.get("oklch","lch"),"l"];return Gt(e,n,s=>s*(1+t))}function G2(e,t=.25){let n=[T.get("oklch","lch"),"l"];return Gt(e,n,s=>s*(1-t))}var Z2=Object.freeze({__proto__:null,darken:G2,lighten:K2});function Ih(e,t,r=.5,n={}){return[e,t]=[V(e),V(t)],ur(r)==="object"&&([r,n]=[.5,r]),ms(e,t,n)(r)}function Rh(e,t,r={}){let n;Ga(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:s,deltaEMethod:i,steps:o=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[V(e),V(t)],n=ms(e,t,u));let l=Pn(e,t),c=s>0?Math.max(o,Math.ceil(l/s)+1):o,d=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)d=[{p:.5,color:n(.5)}];else{let m=1/(c-1);d=Array.from({length:c},(p,v)=>{let w=v*m;return{p:w,color:n(w)}})}if(s>0){let m=d.reduce((p,v,w)=>{if(w===0)return 0;let A=Pn(v.color,d[w-1].color,i);return Math.max(p,A)},0);for(;m>s;){m=0;for(let p=1;p<d.length&&d.length<a;p++){let v=d[p-1],w=d[p],A=(w.p+v.p)/2,D=n(A);m=Math.max(m,Pn(D,v.color),Pn(D,w.color)),d.splice(p,0,{p:A,color:n(A)}),p++}}}return d=d.map(m=>m.color),d}function ms(e,t,r={}){if(Ga(e)){let[u,l]=[e,t];return ms(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:s,progression:i,premultiplied:o}=r;e=V(e),t=V(t),e=ln(e),t=ln(t);let a={colors:[e,t],options:r};if(n?n=T.get(n):n=T.registry[nt.interpolationSpace]||e.space,s=s?T.get(s):n,e=ae(e,n),t=ae(t,n),e=fr(e),t=fr(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[c,d]=[Qe(e,l),Qe(t,l)];isNaN(c)&&!isNaN(d)?c=d:isNaN(d)&&!isNaN(c)&&(d=c),[c,d]=Sy(u,[c,d]),Gt(e,l,c),Gt(t,l,d)}return o&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=i?i(u):u;let l=e.coords.map((m,p)=>{let v=t.coords[p];return Qn(m,v,u)}),c=Qn(e.alpha,t.alpha,u),d={space:n,coords:l,alpha:c};return o&&(d.coords=d.coords.map(m=>m/c)),s!==n&&(d=ae(d,s)),d},{rangeArgs:a})}function Ga(e){return ur(e)==="function"&&!!e.rangeArgs}nt.interpolationSpace="lab";function Y2(e){e.defineFunction("mix",Ih,{returns:"color"}),e.defineFunction("range",ms,{returns:"function<color>"}),e.defineFunction("steps",Rh,{returns:"array<color>"})}var J2=Object.freeze({__proto__:null,isRange:Ga,mix:Ih,range:ms,register:Y2,steps:Rh}),Lh=new T({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dn,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,s,i]=e,[o,a,u]=[NaN,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:o=(s-i)/l+(s<i?6:0);break;case s:o=(i-n)/l+2;break;case i:o=(n-s)/l+4}o=o*60}return a<0&&(o+=180,a=Math.abs(a)),o>=360&&(o-=360),[o,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function s(i){let o=(i+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(o-3,9-o,1))}return[s(0),s(8),s(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Oh=new T({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Lh,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let s=n+r*Math.min(n,1-n);return[t,s===0?0:200*(1-n/s),100*s]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let s=n*(1-r/2);return[t,s===0||s===1?0:(n-s)/Math.min(s,1-s)*100,s*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),H2=new T({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Oh,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let s=r+n;if(s>=1){let a=r/s;return[t,0,a*100]}let i=1-n,o=i===0?0:1-r/i;return[t,o*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Q2=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],X2=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var _h=new Ke({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Q2,fromXYZ_M:X2}),ew=new Ke({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:_h,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const tw=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],rw=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Vh=new Ke({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:qa,toXYZ_M:tw,fromXYZ_M:rw});const nw=1/512,sw=16/512;var iw=new Ke({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Vh,toBase(e){return e.map(t=>t<sw?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=nw?t**(1/1.8):16*t)}}),ow=new T({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:un,fromBase(e){let[t,r,n]=e,s;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),St(s)]},toBase(e){let[t,r,n]=e,s,i;return isNaN(n)?(s=0,i=0):(s=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,s,i]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let Uh=Me.D65;const aw=216/24389,sc=24389/27,[ic,oc]=$i({space:Ee,coords:Uh});var Wh=new T({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Uh,base:Ee,fromBase(e){let t=[ge(e[0]),ge(e[1]),ge(e[2])],r=t[1],[n,s]=$i({space:Ee,coords:t});if(!Number.isFinite(n)||!Number.isFinite(s))return[0,0,0];let i=r<=aw?sc*r:116*Math.cbrt(r)-16;return[i,13*i*(n-ic),13*i*(s-oc)]},toBase(e){let[t,r,n]=e;if(t===0||cr(t))return[0,0,0];r=ge(r),n=ge(n);let s=r/(13*t)+ic,i=n/(13*t)+oc,o=t<=8?t/sc:Math.pow((t+16)/116,3);return[o*(9*s/(4*i)),o,o*((12-3*s-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Za=new T({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Wh,fromBase(e){let[t,r,n]=e,s;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),St(s)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const uw=216/24389,lw=24389/27,ac=be[0][0],uc=be[0][1],mo=be[0][2],lc=be[1][0],cc=be[1][1],po=be[1][2],dc=be[2][0],fc=be[2][1],go=be[2][2];function Vr(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function oi(e){const t=Math.pow(e+16,3)/1560896,r=t>uw?t:e/lw,n=r*(284517*ac-94839*mo),s=r*(838422*mo+769860*uc+731718*ac),i=r*(632260*mo-126452*uc),o=r*(284517*lc-94839*po),a=r*(838422*po+769860*cc+731718*lc),u=r*(632260*po-126452*cc),l=r*(284517*dc-94839*go),c=r*(838422*go+769860*fc+731718*dc),d=r*(632260*go-126452*fc);return{r0s:n/i,r0i:s*e/i,r1s:n/(i+126452),r1i:(s-769860)*e/(i+126452),g0s:o/u,g0i:a*e/u,g1s:o/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/d,b0i:c*e/d,b1s:l/(d+126452),b1i:(c-769860)*e/(d+126452)}}function hc(e,t){const r=t/360*Math.PI*2,n=Vr(e.r0s,e.r0i,r),s=Vr(e.r1s,e.r1i,r),i=Vr(e.g0s,e.g0i,r),o=Vr(e.g1s,e.g1i,r),a=Vr(e.b0s,e.b0i,r),u=Vr(e.b1s,e.b1i,r);return Math.min(n,s,i,o,a,u)}var cw=new T({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Za,gamutSpace:dn,fromBase(e){let[t,r,n]=[ge(e[0]),ge(e[1]),ge(e[2])],s;if(t>99.9999999)s=0,t=100;else if(t<1e-8)s=0,t=0;else{let i=oi(t),o=hc(i,n);s=r/o*100}return[n,s,t]},toBase(e){let[t,r,n]=[ge(e[0]),ge(e[1]),ge(e[2])],s;if(n>99.9999999)n=100,s=0;else if(n<1e-8)n=0,s=0;else{let i=oi(n);s=hc(i,t)/100*r}return[n,s,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});be[0][0];be[0][1];be[0][2];be[1][0];be[1][1];be[1][2];be[2][0];be[2][1];be[2][2];function Ur(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function mc(e){let t=Ur(e.r0s,e.r0i),r=Ur(e.r1s,e.r1i),n=Ur(e.g0s,e.g0i),s=Ur(e.g1s,e.g1i),i=Ur(e.b0s,e.b0i),o=Ur(e.b1s,e.b1i);return Math.min(t,r,n,s,i,o)}var dw=new T({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Za,gamutSpace:"self",fromBase(e){let[t,r,n]=[ge(e[0]),ge(e[1]),ge(e[2])],s;if(t>99.9999999)s=0,t=100;else if(t<1e-8)s=0,t=0;else{let i=oi(t),o=mc(i);s=r/o*100}return[n,s,t]},toBase(e){let[t,r,n]=[ge(e[0]),ge(e[1]),ge(e[2])],s;if(n>99.9999999)n=100,s=0;else if(n<1e-8)n=0,s=0;else{let i=oi(n);s=mc(i)/100*r}return[n,s,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const pc=203,gc=2610/2**14,fw=2**14/2610,hw=2523/2**5,yc=2**5/2523,wc=3424/2**12,vc=2413/2**7,bc=2392/2**7;var mw=new Ke({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Ci,toBase(e){return e.map(function(t){return(Math.max(t**yc-wc,0)/(vc-bc*t**yc))**fw*1e4/pc})},fromBase(e){return e.map(function(t){let r=Math.max(t*pc/1e4,0),n=wc+vc*r**gc,s=1+bc*r**gc;return(n/s)**hw})}});const Dc=.17883277,Ec=.28466892,Ac=.55991073,yo=3.7743;var pw=new Ke({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Ci,toBase(e){return e.map(function(t){return t<=.5?t**2/3*yo:(Math.exp((t-Ac)/Dc)+Ec)/12*yo})},fromBase(e){return e.map(function(t){return t/=yo,t<=1/12?Math.sqrt(3*t):Dc*Math.log(12*t-Ec)+Ac})}});const jh={};dr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=qh(e.W1,e.W2,e.options.method))});dr.add("chromatic-adaptation-end",e=>{e.M||(e.M=qh(e.W1,e.W2,e.options.method))});function ki({id:e,toCone_M:t,fromCone_M:r}){jh[e]=arguments[0]}function qh(e,t,r="Bradford"){let n=jh[r],[s,i,o]=ue(n.toCone_M,e),[a,u,l]=ue(n.toCone_M,t),c=[[a/s,0,0],[0,u/i,0],[0,0,l/o]],d=ue(c,n.toCone_M);return ue(n.fromCone_M,d)}ki({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});ki({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});ki({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});ki({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Me,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Me.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const gw=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],yw=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var zh=new Ke({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Me.ACES,toXYZ_M:gw,fromXYZ_M:yw});const Bs=2**-16,wo=-.35828683,Ps=(Math.log2(65504)+9.72)/17.52;var ww=new Ke({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[wo,Ps],name:"Red"},g:{range:[wo,Ps],name:"Green"},b:{range:[wo,Ps],name:"Blue"}},referred:"scene",base:zh,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Bs)*2:r<Ps?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Bs)+9.72)/17.52:t<Bs?(Math.log2(Bs+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Cc=Object.freeze({__proto__:null,A98RGB:ew,A98RGB_Linear:_h,ACEScc:ww,ACEScg:zh,CAM16_JMh:o2,HCT:es,HPLuv:dw,HSL:Lh,HSLuv:cw,HSV:Oh,HWB:H2,ICTCP:Xo,JzCzHz:Qo,Jzazbz:vh,LCH:Xn,LCHuv:Za,Lab:Xe,Lab_D65:ra,Luv:Wh,OKLCH:ow,OKLab:un,P3:Mh,P3_Linear:Th,ProPhoto:iw,ProPhoto_Linear:Vh,REC_2020:Fh,REC_2020_Linear:Ci,REC_2100_HLG:pw,REC_2100_PQ:mw,XYZ_ABS_D65:za,XYZ_D50:qa,XYZ_D65:Ee,sRGB:dn,sRGB_Linear:Nh});let ee=class Ve{constructor(...t){let r;t.length===1&&(r=V(t[0]));let n,s,i;r?(n=r.space||r.spaceId,s=r.coords,i=r.alpha):[n,s,i]=t,Object.defineProperty(this,"space",{value:T.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=s?s.slice():[0,0,0],this.alpha=i>1||i===void 0?1:i<0?0:i;for(let o=0;o<this.coords.length;o++)this.coords[o]==="NaN"&&(this.coords[o]=NaN);for(let o in this.space.coords)Object.defineProperty(this,o,{get:()=>this.get(o),set:a=>this.set(o,a)})}get spaceId(){return this.space.id}clone(){return new Ve(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=E2(this,...t);return r.color=new Ve(r.color),r}static get(t,...r){return t instanceof Ve?t:new Ve(t,...r)}static defineFunction(t,r,n=r){let{instance:s=!0,returns:i}=n,o=function(...a){let u=r(...a);if(i==="color")u=Ve.get(u);else if(i==="function<color>"){let l=u;u=function(...c){let d=l(...c);return Ve.get(d)},Object.assign(u,l)}else i==="array<color>"&&(u=u.map(l=>Ve.get(l)));return u};t in Ve||(Ve[t]=o),s&&(Ve.prototype[t]=function(...a){return o(this,...a)})}static defineFunctions(t){for(let r in t)Ve.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Ve);else for(let r in t)Ve.defineFunction(r,t[r])}};ee.defineFunctions({get:Qe,getAll:hs,set:Gt,setAll:ja,to:ae,equals:A2,inGamut:Nr,toGamut:fr,distance:wh,toString:Un});Object.assign(ee,{util:Dy,hooks:dr,WHITES:Me,Space:T,spaces:T.registry,parse:gh,defaults:nt});for(let e of Object.keys(Cc))T.register(Cc[e]);for(let e in T.registry)na(e,T.registry[e]);dr.add("colorspace-init-end",e=>{na(e.id,e),e.aliases?.forEach(t=>{na(t,e)})});function na(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(ee.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(s,i)=>{try{return T.resolveCoord([t,i]),!0}catch{}return Reflect.has(s,i)},get:(s,i,o)=>{if(i&&typeof i!="symbol"&&!(i in s)){let{index:a}=T.resolveCoord([t,i]);if(a>=0)return s[a]}return Reflect.get(s,i,o)},set:(s,i,o,a)=>{if(i&&typeof i!="symbol"&&!(i in s)||i>=0){let{index:u}=T.resolveCoord([t,i]);if(u>=0)return s[u]=o,this.setAll(e,s),!0}return Reflect.set(s,i,o,a)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}ee.extend(cn);ee.extend({deltaE:Pn});Object.assign(ee,{deltaEMethods:cn});ee.extend(Z2);ee.extend({contrast:j2});ee.extend(z2);ee.extend($2);ee.extend(J2);ee.extend(js);const vw=Symbol("no update");class vo extends gr()("observable-value-update"){}class bw extends Hf("observable-destroy"){}class Dw{listenTarget=new Ta;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];return r===vw||(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)?!1:(this.value=r,this.listenTarget.dispatch(new vo({detail:r})),!0)}listen(t,r){const n=s=>r(s.detail);return this.listenerMap.set(r,n),t&&r(this.value),this.listenTarget.listen(vo,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(vo,r)}destroy(){this.listenTarget.dispatch(new bw),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function Ew(e,t){return Zg(e,t,(r,n)=>E.isFunction(r)&&E.isFunction(n)?!0:E.strictEquals(r,n))}const Kh="__vir__shape__definition__key__do__not__use__in__actual__objects",Ya="__vir__shape__specifier__key__do__not__use__in__actual__objects",Gh="__vir__custom__specifier__key__do__not__use__in__actual__objects";function Ja(e){return E.hasKey(e,Gh)}function Zh({customName:e,defaultValue:t,checker:r}){return{customName:e,checker:r,defaultValue:t,[Gh]:!0,[Ya]:!0}}Zh({customName:"UUID",defaultValue:nn.isUuid("00000000-0000-1000-0000-000000000000"),checker:E.isUuid});function Ha(e){return E.hasKey(e,Kh)}var ye;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional",e.Tuple="tuple"})(ye||(ye={}));function Aw(...e){return wr(e,ye.And)}function sa(...e){return wr(e,ye.Enum)}function _(...e){return wr(e,ye.Exact)}function Si(...e){return wr(e,ye.IndexedKeys)}function te(...e){return wr(e,ye.Or)}function Cw(e){return wr([e],ye.Unknown)}function zr(e,t){return wr([e,t],ye.NumericRange)}function He(e){return wr([e],ye.Optional)}function xi(e){return xt(e,ye.And)}function Fi(e){return xt(e,ye.Class)}function Ti(e){return xt(e,ye.Enum)}function Ni(e){return xt(e,ye.Exact)}function Mi(e){return xt(e,ye.IndexedKeys)}function Yh(e){return xt(e,ye.Tuple)}function ps(e){return xt(e,ye.Or)}function Bi(e){return xt(e,ye.Unknown)}function Jh(e){return xt(e,ye.NumericRange)}function ai(e){return xt(e,ye.Optional)}function xt(e,t){const r=gs(e);return!!r&&r.specifierType===t}function wr(e,t){return{[Ya]:!0,specifierType:t,parts:e}}function gs(e){if(!(!E.isObject(e)||!E.hasKey(e,Ya)))return e}class $c extends TypeError{name="DefaultValueConstructionError"}function $w({subject:e,shape:t}){const r=t?.constructor,n=e?.constructor?.prototype,s=e?.constructor===r,i=r&&n?n instanceof r:!1,o=s||i||kw({shapeConstructor:r,subject:e});return typeof e==typeof t&&o}function kw({shapeConstructor:e,subject:t}){return t.constructor==null&&e===Object}class We extends TypeError{name="ShapeMismatchError"}function Hh(e,t,r={}){try{return Qh(e,t,r),!0}catch{return!1}}function Qh(e,t,r={},n=""){try{xe({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}catch(s){throw n?fi(s,n):s}}function ia(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function xe({subject:e,shape:t,keys:r,options:n}){if(Bi(t))return!0;if(Ha(t))return xe({subject:e,shape:t.shape,keys:r,options:n});if(Ja(t)){if(!t.checker(e))throw new We(`Subject ${h(e)} does not match ${t.customName} shape.`);return!0}const s=ia(r);if(gs(e))throw new We(`Shape test subjects cannot be contain shape specifiers but one was found at ${s}.`);if(Yh(t)){if(!E.isArray(e))throw new We(`Subject is not an array and cannot match tuple definition at key ${s}`);return t.parts.every((o,a)=>{const u=e[a];return xe({keys:[...r,a],options:n,shape:o,subject:u})})}else{if(ai(t))return xe({keys:r,options:n,shape:t.parts[0],subject:e});if(qs(e,t,r,n)){if(E.isFunction(t))return E.isFunction(e);if(Fi(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(c=>[c,!1])),u=[];let l=!1;if(ps(t)){const c=[];l=t.parts.some(d=>{try{const m=xe({subject:e,shape:d,keys:r,options:n});return Object.assign(a,m),!0}catch(m){if(m instanceof We)return c.push(m.message),!1;throw m}}),!l&&E.isLengthAtLeast(c,1)&&u.push(c[0])}else if(xi(t))l=t.parts.every(c=>{try{const d=xe({subject:e,shape:c,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(a,d),!0}catch(d){if(d instanceof We)return u.push(d.message),!1;throw d}});else if(Ni(t)){const c=xe({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(a,c),l=!0}else{if(Ti(t))throw new We(`Cannot compare an enum specifier to an object at ${s}`);if(E.isArray(t)&&E.isArray(o))l=o.every((c,d)=>{const m=t.some(p=>{try{return xe({subject:c,shape:p,keys:[...r,d],options:n}),!0}catch(v){if(v instanceof We)return u.push(v.message),!1;throw v}});return a[d]=m,m});else if(Mi(t)){const c=Re(e,(d,m)=>(n.ignoreExtraKeys||xe({shape:t.parts[0].keys,subject:d,keys:[...r,d],options:n}),xe({shape:t.parts[0].values,subject:m,keys:[...r,d],options:n}),!0));Object.assign(a,c),l=!0}else{const c=Sw({keys:r,options:n,shape:t,subject:e});Object.assign(a,c),l=!0}}if(u.length)throw new We(di(u));if(!l){const d=`Failed on key(s): ${Object.keys(a).filter(m=>!a[m]).map(m=>ia([...r,m])).join(",")}`;throw new We(d)}return n.ignoreExtraKeys||Object.entries(a).forEach(([c,d])=>{if(!d)throw new We(`subject as extra key '${c}' in ${s}.`)}),a}else if(n.exactValues)return e===t}else throw new We(`Subject does not match shape definition at key ${s}`)}return!0}function Sw({keys:e,options:t,shape:r,subject:n}){const s=ia(e),i={};if(E.isObject(r)){const o=new Set(X(r)),a=new Set(X(n));o.forEach(u=>{(u in n||ai(r[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new We(`Subject has extra key '${String(u)}' in ${s}`)}),o.forEach(u=>{const l=r[u],c=ps(l)?l.parts.includes(void 0):!1,d=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!c&&!d)throw new We(`Subject missing key '${String(u)}' in ${s}`)}),a.forEach(u=>{if(!(u in n)&&ai(r[u])){i[u]=!0;return}const l=n[u];if(t.ignoreExtraKeys&&!o.has(u))return;const c=r[u];xe({subject:l,shape:c,keys:[...e,u],options:t}),i[u]=!0})}else throw new We(`Shape definition at ${s} was not an object.`);return i}function qs(e,t,r,n,s){const i=gs(t);if(i){if(Ja(i))return i.checker(e);if(Jh(i))return E.isNumber(e)?e>=i.parts[0]&&e<=i.parts[1]:!1;if(Fi(i))return e instanceof i.parts[0];if(xi(i))return i.parts.every(o=>{try{return xe({subject:e,shape:o,keys:r,options:{...n,ignoreExtraKeys:!0}}),!0}catch{return!1}});if(ps(i))return i.parts.some(o=>{try{return xe({subject:e,shape:o,keys:r,options:n}),!0}catch{return!1}});if(Ni(i))return E.isObject(e)?(xe({subject:e,shape:i.parts[0],keys:r,options:{...n,exactValues:!0}}),!0):e===i.parts[0];if(Ti(i))return E.hasValue(Object.values(i.parts[0]),e);if(Mi(i)){if(!E.isObject(e))return!1;const o=xw(e,i,!!n.ignoreExtraKeys),a=Ko(e).every(u=>{try{return xe({subject:u,shape:i.parts[0].values,keys:r,options:n}),!0}catch{return!1}});return o&&a}else if(Bi(i))return!0}return s?t===e:$w({subject:e,shape:t})}function xw(e,t,r){const n=t.parts[0].required,s=t.parts[0].keys,i=Qa(t);if(E.isBoolean(i))return X(e).every(u=>qs(u,s,[],{exactValues:!1,ignoreExtraKeys:r}));const o=n?i.every(u=>X(e).some(l=>qs(l,u,[],{exactValues:!1,ignoreExtraKeys:!1},!0))):!0;return X(e).every(u=>i.includes(u)?qs(u,s,[],{exactValues:!1,ignoreExtraKeys:!1}):r)&&o}function Qa(e){const t=e.parts[0].keys,r=gs(t);if(E.isPropertyKey(t))return!0;if(r){if(Fi(r))return!1;if(xi(r))return!1;if(ps(r)){const n=r.parts.map(s=>Qa(Si({...e.parts[0],keys:s})));return n.includes(!1)?!1:n.flat().filter(E.isPropertyKey)}else if(Ni(r)){const n=r.parts.filter(E.isPropertyKey);return n.length!==r.parts.length?!1:n}else{if(Ti(r))return Object.values(r.parts[0]);if(Mi(r))return!1;if(Bi(r))return!0}}return!1}function oa(e){return kr(e)}function kr(e){const t=gs(e);if(Ja(e))return e.defaultValue;if(t){if(Yh(t))return t.parts.map(r=>kr(r));if(ai(t))return kr(t.parts[0]);if(Jh(t))return t.parts[0];if(Fi(t)){const r=t.parts[0];try{return new r}catch(n){throw new $c(`Failed to create default value for classShape for class '${r.name}': ${Ie(n)}`)}}else{if(ps(t)||Ni(t))return kr(t.parts[0]);if(xi(t))return t.parts.reduce((r,n)=>Object.assign(r,kr(n)),{});if(Ti(t))return t.parts[1]||Object.values(t.parts[0])[0];if(Mi(t)){const r=Qa(t);return!t.parts[0].required||E.isBoolean(r)?{}:Object.fromEntries(r.map(n=>[n,kr(t.parts[0].values)]))}else{if(Bi(t))return t.parts[0]??{};throw new $c(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return Ha(e)?oa(e.shape):e instanceof RegExp?e:E.isArray(e)?e.map(kr):E.isObject(e)?Re(e,(r,n)=>oa(n)):e}function ct(e,t=!1){if(Ha(e))return e;const r={shape:e,isReadonly:t,get defaultValue(){return oa(e)},[Kh]:!0};return Object.defineProperty(r,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),r}const Fw=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Xh=Fw.reduce((e,t)=>(e[t]=t,e),{});oe.defaultZone.name;const e0=Xh.UTC,Tw=ct({hour:zr(Yu.min,Yu.max),minute:zr(Ju.min,Ju.max),second:zr(Hu.min,Hu.max),millisecond:zr(Qu.min,Qu.max),timezone:sa(Xh,e0)}),Nw=ct({year:2023,month:zr(Gu.min,Gu.max),day:zr(Zu.min,Zu.max),timezone:e0});ct(Aw(Nw,Tw));B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";ct(te({get:_(N.Month),in:te(_(N.Year),_(N.Quarter))},{get:_(N.Week),in:te(_(N.Year),_(N.Quarter),_(N.Month))},{get:_(N.Day),in:te(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week))},{get:_(N.Hour),in:te(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week),_(N.Day))},{get:_(N.Minute),in:te(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week),_(N.Day),_(N.Hour))},{get:_(N.Second),in:te(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week),_(N.Day),_(N.Hour),_(N.Minute))},{get:_(N.Millisecond),in:te(_(N.Year),_(N.Quarter),_(N.Month),_(N.Week),_(N.Day),_(N.Hour),_(N.Minute),_(N.Second))}));var kc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(kc||(kc={}));var aa;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(aa||(aa={}));var Sc;(function(e){e.Year="year",e.Month="month",e.Day="day"})(Sc||(Sc={}));const Mw={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};N1(Mw,gt(aa));oe.defaultLocale;ct(Zh({defaultValue:new Date().toISOString(),customName:"UtcIsoString",checker(e){return Bw(e)}}));function Bw(e){return I.fromISO(e).toUTC().toISO()===e}const Pw=ct({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:Cw()});function bo(e){return Hh(e,Pw,{allowExtraKeys:!0})}class t0 extends Dw{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||Ew}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Iw}=hy,xc=()=>document.createComment(""),xn=(e,t,r)=>{const n=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=n.insertBefore(xc(),s),o=n.insertBefore(xc(),s);r=new Iw(i,o,e,e.options)}else{const i=r._$AB.nextSibling,o=r._$AM,a=o!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==o._$AU&&r._$AP(u)}if(i!==s||a){let u=r._$AA;for(;u!==i;){const l=u.nextSibling;n.insertBefore(u,s),u=l}}}return r},$r=(e,t,r=e)=>(e._$AI(t,r),e),Rw={},Lw=(e,t=Rw)=>e._$AH=t,Ow=e=>e._$AH,Do=e=>{e._$AP?.(!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const n=t.nextSibling;t.remove(),t=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xa={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Yt=e=>(...t)=>({_$litDirective$:e,values:t});class Jt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _w={attribute:!0,type:String,converter:ti,reflect:!1,hasChanged:La},Vw=(e=_w,t,r)=>{const{kind:n,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),n==="accessor"){const{name:o}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,u,e)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(n==="setter"){const{name:o}=r;return function(a){const u=this[o];t.call(this,a),this.requestUpdate(o,u,e)}}throw Error("Unsupported decorator location: "+n)};function Uw(e){return(t,r)=>typeof r=="object"?Vw(e,t,r):((n,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,n),o?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=Yt(class extends Jt{constructor(e){if(super(e),e.type!==Xa.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const s=!!t[n];s===this.st.has(n)||this.nt?.has(n)||(s?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return rt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=e=>e??K;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ww(e,t,r){return e?t(e):r?.(e)}class jw extends Vn{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function qw(e,t,r){const n=!t.length&&!r.length,s=e.length?!1:!t.filter(a=>!!a.index).length;if(n||s)return[...e];const i=e.map(a=>[a]);return i.length||(i[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(i[a]=[])}),t.forEach(a=>{const u=i[a.index];u&&u.splice(0,0,...a.values)}),i.flat()}function ua(e){return E.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function eu(e){return E.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function r0(e){return ds(e,t=>{if(ua(t))return t.definition;if(eu(t))return t.tagInterpolationKey||t},E.isTruthy)}const n0=new WeakMap;function zw(e,t){const r=r0(t);return s0(n0,[e,...r]).value?.template}function Kw(e,t,r){const n=r0(t);return o0(n0,[e,...n],r)}function s0(e,t,r=0){const{currentTemplateAndNested:n,reason:s}=i0(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?s0(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:s}}function i0(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const s=e.get(n);return s==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:s,reason:"key and value exists"}}function o0(e,t,r,n=0){const{currentTemplateAndNested:s,currentKey:i,reason:o}=i0(e,t,n);if(!i)return{result:!1,reason:o};const a=s??{nested:void 0,template:void 0};if(s||e.set(i,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),o0(u,t,r,n+1)}function a0(e,t,r){const n=zw(e,t),s=n??r();if(!n){const a=Kw(e,t,s);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const i=s.valuesTransform(t),o=qw(t,i.valueInsertions,i.valueIndexDeletions);return{strings:s.templateStrings,values:o}}function u0(e,t,r,n){const s=[],i=[],o=[],a=[];return e.forEach((l,c)=>{const d=s.length-1,m=s[d],p=c-1,v=t[p];n&&n(l);let w,A=[];if(typeof m=="string"&&(w=r(m,l,v),w)){s[d]=[m,w.replacement].join(""),o.push(p);const S=w.getExtraValues;A=S?S(v):[],A.length&&S?(s[d]+=" ",A.forEach((M,L)=>{L&&s.push(" ")}),a.push(M=>{const L=M[p],z=S(L);return{index:p,values:z}}),s.push(l)):s[d]+=l}w||s.push(l);const D=e.raw[c];w?(i[d]=[i[d],w.replacement,D].join(""),A.length&&A.forEach(()=>{i.push("")})):i.push(D)}),{templateStrings:Object.assign([],s,{raw:i}),valuesTransform(l){const c=a.flatMap(d=>d(l));return{valueIndexDeletions:o,valueInsertions:c}}}}function Gw(...[e,t,r]){if(eu(r))return{replacement:r.tagName,getExtraValues:void 0}}function Zw(e,t){return u0(e,t,Gw)}function k(e,...t){const r=a0(e,t,()=>Zw(e,t));return Ws(r.strings,...r.values)}const Yw={allowPolymorphicState:!1};function l0(e,t){const r=e.instanceState;X(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&X(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}function Fc(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Jw extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function tu(){return e=>class extends Jw{static type=e;_type=e;constructor(t){super(e,t)}}}function Pe(){return tu()}function Hw(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const s=tu()([e,n].join("-"));return r[n]=s,r},{}):{}}function Qw(e){return e?Re(e,t=>t):{}}function c0(e,t){t in e||Uw()(e,t)}function Xw(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Tc(e,t){const r=e;function n(o){t?Xw(o,e,e.tagName):c0(e,o)}function s(o,a){return n(a),r[a]}return new Proxy({},{get:s,set(o,a,u){n(a);const l=r[a];function c(m){o[a]=m,r[a]=m}const d=e.observablePropertyListenerMap[a];if(l!==u&&bo(l)&&d&&l.removeListener(d),bo(u))if(d)u.listen(!1,d);else{let m=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=m,u.listen(!1,m)}else bo(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return s(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function ev({hostClassNames:e,cssVars:t}){return{hostClasses:Re(e,(r,n)=>({name:me(n),selector:me(`:host(.${n})`)})),cssVars:t}}function tv({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:s}){t&&X(t).forEach(i=>{const o=t[i],a=r[i];typeof o=="function"&&(o({state:n,inputs:s})?e.classList.add(a):e.classList.remove(a))})}function rv({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function s(o){X(o).forEach(a=>{const u=o[a];e.instanceState[a]=u})}return{cssVars:r,slotNames:n,dispatch:o=>e.dispatchEvent(o),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:s}}function nv(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}function ru(...e){return pr.isEmpty(e),t=>{const r=t;if(!E.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return sv({...r,options:{...r.options}})}}function sv(e){if(!E.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!E.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...Yw,...e.options},r=Hw(e.tagName,e.events),n=Qw(e.hostClasses);e.hostClasses&&Fc(e.tagName,e.hostClasses),e.cssVars&&Fc(e.tagName,e.cssVars);const s=e.cssVars?yr(e.cssVars):{},i=nv(e.slotNames),o=typeof e.styles=="function"?e.styles(ev({hostClassNames:n,cssVars:s})):e.styles||k``,a=e.render;function u(...[c]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:l,inputs:c}}const l=class extends jw{static elementOptions=t;static tagName=e.tagName;static styles=o;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return rv({element:this,eventsMap:r,cssVars:s,slotNamesMap:i})}static assign=u;static events=r;static render=a;static hostClasses=n;static cssVars=s;static init=e;static slotNames=i;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const c=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(c);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");X(m).forEach(p=>{c0(this,p),this.instanceState[p]=m[p]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(c)instanceof Promise))throw new TypeError("init cannot be asynchronous");const d=a(c);if(d instanceof Promise)throw new TypeError("render cannot be asynchronous");return tv({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:c.state,inputs:c.inputs}),this._lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=fi(c,`Failed to render ${e.tagName}`);return console.error(d),this._lastRenderError=d,Ie(d)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const c=this.createRenderParams();if(e.init(c)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(c=>{E.hasKey(c,"destroy")&&E.isFunction(c.destroy)&&c.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const c=this.createRenderParams();if(e.cleanup(c)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(c){l0(this,c)}observablePropertyListenerMap={};instanceInputs=Tc(this,!1);instanceState=Tc(this,!t.allowPolymorphicState);constructor(){super(),this.definition=l}};return Object.defineProperties(l,{name:{value:R1(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nc=(e,t,r)=>{const n=new Map;for(let s=t;s<=r;s++)n.set(e[s],s);return n},iv=Yt(class extends Jt{constructor(e){if(super(e),e.type!==Xa.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const s=[],i=[];let o=0;for(const a of e)s[o]=n?n(a,o):o,i[o]=r(a,o),o++;return{values:i,keys:s}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const s=Ow(e),{values:i,keys:o}=this.dt(t,r,n);if(!Array.isArray(s))return this.ut=o,i;const a=this.ut??=[],u=[];let l,c,d=0,m=s.length-1,p=0,v=i.length-1;for(;d<=m&&p<=v;)if(s[d]===null)d++;else if(s[m]===null)m--;else if(a[d]===o[p])u[p]=$r(s[d],i[p]),d++,p++;else if(a[m]===o[v])u[v]=$r(s[m],i[v]),m--,v--;else if(a[d]===o[v])u[v]=$r(s[d],i[v]),xn(e,u[v+1],s[d]),d++,v--;else if(a[m]===o[p])u[p]=$r(s[m],i[p]),xn(e,s[d],s[m]),m--,p++;else if(l===void 0&&(l=Nc(o,p,v),c=Nc(a,d,m)),l.has(a[d]))if(l.has(a[m])){const w=c.get(o[p]),A=w!==void 0?s[w]:null;if(A===null){const D=xn(e,s[d]);$r(D,i[p]),u[p]=D}else u[p]=$r(A,i[p]),xn(e,s[d],A),s[w]=null;p++}else Do(s[m]),m--;else Do(s[d]),d++;for(;p<=v;){const w=xn(e,u[v+1]);$r(w,i[p]),u[p++]=w}for(;d<=m;){const w=s[d++];w!==null&&Do(w)}return this.ut=o,Lw(e,u),rt}}),ov=iv;function ys(e,t){return ts(e,t),e.element}function av(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ts(e,t){const r=av(e),n=r?`: in ${r}`:"";if(e.type!==Xa.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function uv(e,t){return Yt(class extends Jt{element;constructor(r){super(r),this.element=nn.instanceOf(ys(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),rt}})}const la=uv("attributes",({element:e,params:[t],directive:r})=>{const s=cs(r,"allAttributesApplied",()=>new Set);X(t).forEach(i=>{if(i.toLowerCase()!==i)throw new Error(`Cannot assign attribute name with uppercase letters: ${i}`);s.add(i)}),s.forEach(i=>{const o=t[i];o==null||o===!1||o===K?e.removeAttribute(i):o===""||o===!0?e.setAttribute(i,""):e.setAttribute(i,String(o))})});function lv(e){const t=Yt(class extends Jt{element;constructor(r){super(r),this.element=ys(r,e)}render(r){return this.element.setAttribute(e,r),rt}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function G(e,t){return cv(e,t)}const cv=Yt(class extends Jt{element;lastListenerMetaData;constructor(e){super(e),this.element=ys(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),rt}}),Mc="onDomCreated",Bc=Yt(class extends Jt{element;constructor(e){super(e),ts(e,Mc)}update(e,[t]){ts(e,Mc);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Eo="onResize",d0=Yt(class extends Jt{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),ts(e,Eo)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${Eo} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){ts(e,Eo),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function Be(e,t,r){return Ww(e,()=>t,()=>r)}const{attributeDirective:dv}=lv("data-test-id"),Hr=dv;function f0(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>s=>(t(s),ru(...n)(r(s)))}function fv(e,t){return hv(void 0,e)}const hv=Yt(class extends Jt{element;constructor(e){super(e),this.element=ys(e,"assign")}render(e,t){return l0(this.element,t),rt}}),mv={};function pv(e,t){return t.map((r,n)=>{const s=e[n],i=e[n+1];if(s&&i){const{shouldHaveTagNameHere:o}=h0(s,i);if(o&&E.isString(r))return{tagName:r,tagInterpolationKey:cs(mv,r,()=>({tagName:r}))}}return r})}function h0(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function gv(...[e,t,r]){const n=ua(r)?r.definition:r,{isOpeningTag:s,shouldHaveTagNameHere:i}=h0(e,t),o=eu(n);if(o&&i&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(i&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!i||!o?void 0:{replacement:n.tagName,getExtraValues(u){const l=ua(u)?u.inputs:void 0;return[s&&l?fv(l):void 0].filter(E.isTruthy)}}}function yv(e){}function wv(e){return u0(e.strings,e.values,gv,yv)}function y(e,...t){const r=pv(e,t),n=oy(e,...r),s=a0(e,r,()=>wv(n));return{...n,strings:s.strings,values:s.values}}function ca(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],i=(t??[""]).map((o,a)=>{const u=vv(o,n[a]);return`${o}${u}`});return Jf(i.join(""))}function vv(e,t){return t._$litType$!=null||t._$litDirective$!=null?ca(t):Array.isArray(t)?t.map(n=>ca(n)).join(""):e.endsWith("=")?`"${t}"`:t}function m0(e){return Re(e,(t,r)=>r instanceof ee?me(r.toString({format:"hex"})):m0(r))}const bv="dodgerblue";function da(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Ao({background:e,foreground:t}){return{background:e??new ee(da(t)),foreground:t??new ee(da(e))}}function Dv(e){return e==="black"?"white":"black"}const Ev={black:{foregroundFaint1:new ee("#ccc"),foregroundFaint2:new ee("#eee")},white:{foregroundFaint1:new ee("#ccc"),foregroundFaint2:new ee("#eee")}},Av={black:{backgroundFaint1:new ee("#666"),backgroundFaint2:new ee("#444")},white:{backgroundFaint1:new ee("#ccc"),backgroundFaint2:new ee("#fafafa")}};function Pc({themeColor:e=bv,themeStyle:t="light"}={}){const r=new ee(e),n=new ee(t==="dark"?"black":"white"),s=da(n),i=new ee(s),o={nav:{hover:Ao({background:r.clone().set({"hsl.l":93})}),active:Ao({background:r.clone().set({"hsl.l":90})}),selected:Ao({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Av[Dv(s)],foreground:i,...Ev[s]}};return m0(o)}var Vt=(e=>(e.Footer="book-footer",e.NavHeader="book-nav-header",e))(Vt||{});async function fa(e=1){const t=new od;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function Cv(e,t){return{element:e,children:p0(e)}}function p0(e,t,r){return $v(e).map(n=>{const s=p0(n);return{element:n,children:s}})}function $v(e){return[...e.children,...e.shadowRoot?.children??[]]}function Co(e){return e.matches(":focus")}function nu(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:nu(t)}function g0(e,t){if(t(e))return e;const r=nu(e);if(r)return g0(r,t)}async function kv(e){return Sv(e,1)}async function Sv(e,t){return new Promise(r=>{new IntersectionObserver((s,i)=>{pr.isLengthAtLeast(s,1),i.disconnect(),r(s[0].intersectionRatio>=t)}).observe(e)})}function In(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const s=t.name,i=n?.constructor.name,o=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${s}'. Got '${i}'.`:`Target from event '${e.type}' was not of type '${s}'. Got '${i}'.`;throw new Error(o)}return n}function xv(e){const t=nu(e);return t&&g0(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function Fv({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const s=t.toLowerCase(),i=e.toLowerCase();e:for(let o=0,a=0;o<n;o++){const u=i.codePointAt(o);for(;a<r;)if(s.codePointAt(a++)===u)continue e;return!1}return!0}const Tv=Uf(32);function zs(e){return e.join(Tv)}function y0(e){if(!e.length)return[];const t=zs(e),r=y0(e.slice(0,-1));return[t,...r]}const Nv=["error","errors"];function Mv(e){return Nv.includes(e)}function Bv({flattenedNodes:e,searchQuery:t}){const r={};function n(s){Object.values(s.children).map(o=>(n(o),zs(o.fullUrlBreadcrumbs))).forEach(o=>r[o]=!0)}return e.forEach(s=>{const i=s.entry.errors.length&&Mv(t),o=zs(s.fullUrlBreadcrumbs);if(Fv({searchIn:[s.entry.title,...s.entry.descriptionParagraphs.map(u=>E.isString(u)?u:ca(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[o]){const u=y0(s.fullUrlBreadcrumbs);n(s),u.forEach(l=>r[l]=!0)}else r[o]=!1}),e.filter(s=>{const i=zs(s.fullUrlBreadcrumbs),o=r[i];if(!E.isBoolean(o))throw new TypeError(`Failed to find '${s.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return o})}class su extends Error{name="SpaRouterError"}class Ic extends su{name="GlobalUrlEventsConsolidationError"}class Pv extends su{name="SanitizationDepthMaxed"}ct({paths:[""],search:He(te(void 0,Si({keys:"",values:[""],required:!1}))),hash:He(te(void 0,""))});const Iv=ct({basePath:te("",void 0),sanitizeRoute:e=>e,maxListenerCount:te(1,void 0),disableWarnings:te(void 0,!1),isPaused:te(!1,void 0)}),$o="://";function iu(...e){const t=e.join("/"),[r,n=""]=t.includes($o)?t.split($o):["",t];let s=!1;const i=n.replace(/\/{2,}/g,"/").split("/").reduce((o,a,u,l)=>{if(s)return o;const c=l[u+1];let d=a;const m=c?.startsWith("?"),p=!a.includes("?")&&m,v=c==="?";if(m||p){s=!0;let w=!1;const A=l.slice(u+2).reduce((D,S)=>(S.includes("#")&&(w=!0),w?D.concat(S):[D,S].join("&")),"");d=[a,c,v?Yr({value:A,prefix:"&"}):A].join("")}return o.concat(d)},[]);return[r,r?$o:"",i.join("/")].join("")}var fn;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(fn||(fn={}));var hn;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(hn||(hn={}));const Rv=ct({encoding:He(te(void 0,sa(fn))),searchParamStrategy:He(te(void 0,sa(hn)))});function Is(e,t){return e.map(r=>{if(r!=null)return Qr(String(r),t)}).filter(r=>r!=null)}function Qr(e,t){return t?.encoding===fn.Decode?decodeURIComponent(e):t?.encoding===fn.Encode?encodeURIComponent(e):e}const Lv=ct(Si({keys:"",values:[""],required:!0}));function Ov(e,t,r){const n=r?.searchParamStrategy===hn.Clear?{}:Re(e,(o,a)=>E.isString(a)?[a]:a),s=Re(t,(o,a)=>{if(r?.searchParamStrategy===hn.Append){const u=n[o],l=E.isArray(u)?u:[u];if(a){const c=E.isArray(a)?a:[a];return Is([...l,...c],r)}else return Is(l,r)}else return E.isArray(a)?Is(a,r):a?Is([a],r):void 0});return bi({...n,...s},(o,a)=>!!a)}function w0(e,t){return E.isString(e)&&!e.includes("?")?{}:(E.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(i=>{const[o,...a]=F1(i,"=");return[o,a.length?a.join("="):void 0]}).reduce((i,[o,a])=>{const u=v0({options:t,key:o,value:a}),l=cs(i,u.key,()=>[]);return a!=null&&l.push(u.value),i},{})}function _v(e){if(e!=null)return E.isArray(e)?[...e]:e===""?[]:[e]}function Vv(e,t){const r=ds(Object.entries(e),([n,s])=>{const i=_v(s);return i?.length?i.map(o=>{const a=v0({options:t,key:n,value:o});return[a.key,a.value].join("=")}):[n]},(n,[,s])=>s!=null).flat();return r.length?tt({value:r.join("&"),prefix:"?"}):""}function v0({options:e,key:t,value:r}){return{key:Qr(t,e),value:Qr(String(r),e)}}function b0({hash:e,hostname:t,password:r,pathname:n,port:s,protocol:i,search:o,username:a}){return[i?i+"://":"",a?a+":":"",r?r+"@":"",Pi({hostname:t,port:s}),ou({hash:e,pathname:n,search:o})].join("")}function D0({pathname:e}){const t=Yr({value:e,prefix:"/"});return t?t.split("/"):[]}function ou({hash:e,pathname:t,search:r}){return[tt({value:t,prefix:"/"}),r?tt({value:r,prefix:"?"}):"",e?tt({value:e,prefix:"#"}):""].join("")}function Pi({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function E0({hostname:e,port:t,protocol:r}){return[r,Pi({hostname:e,port:t})].filter(E.isTruthy).join("://")}function Xr(e,t){const r=E.isString(e)?Yr({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),s=n?tt({value:Qr(n,t),prefix:"#"}):"",i=r.replace(/#[^#]*$/,""),o=i.replace(/^[^?]*(?:\?|$)/,""),a=o?tt({value:Qr(o,t),prefix:"?"}):"",u=i.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),d=c.replace(/@.*/,""),m=c.replace(/^[^@]*@/,""),p=d!==m,[v,...w]=p?d.split(":").reverse():[],A=w.toReversed().join("").replace(/[/:]/g,"")||"",D=v?.replace(/[/:]/g,"")||"",S=x1(m.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),M=S[0]?.endsWith("]")?"":S[1]===":"&&S[0]||"",z=m.replace(new RegExp(`:${M}($|/)`),"$1").replace(/\/.*/,""),Se=m.replace(/^[^/]*(\/|$)/,"$1"),ft=Qr(Se.replace(/^[^/]*(?:\/|$)/,"/"),t),Oe=Pi({hostname:z,port:M}),Ze=E0({hostname:z,port:M,protocol:l}),Et=b0({hash:s,hostname:z,password:D,pathname:ft,port:M,protocol:l,search:a,username:A}),Ft=w0(a),ws=D0({pathname:ft});return{fullPath:ou({hash:s,pathname:ft,search:a}),hash:s,host:Oe,hostname:z,href:Et,origin:Ze,password:D,pathname:ft,paths:ws,port:M,protocol:l,search:a,searchParams:Ft,username:A}}ct({hash:He(te(void 0,"")),search:He(te(void 0,"",Si({keys:"",required:!1,values:te(null,void 0,"",-1,!1,0n)}))),hostname:He(te(void 0,"")),pathname:He(te(void 0,"")),paths:He(te(void 0,[""])),protocol:He(te(void 0,"")),username:He(te(void 0,"")),password:He(te(void 0,"")),port:He(te(void 0,"",-1))});function Uv(e,t,r){const n=!!r,s=t==null||Hh(t,Rv),i=s?Xr(""):E.instanceOf(e,URL)||E.isString(e)?Xr(e):e,o=s?e:t,a=E.isString(o)&&o.startsWith("."),u=E.isString(o)||E.instanceOf(o,URL)?bi(Xr(o),(w,A)=>E.isTruthy(A)):o,l=n?r:s?t:void 0,c=Re(i,(w,A)=>{if(!E.hasKey(u,w))return A;const D=u[w];return E.isNumber(D)?String(D):E.isString(D)?w==="hash"&&D?tt({value:D,prefix:"#"}):w==="pathname"?tt({value:D,prefix:"/"}):D:A});E.hasKey(u,"paths")&&u.paths&&(c.pathname=iu(a?i.pathname:"",...u.paths));const d=E.isString(u.search)?w0(tt({value:u.search,prefix:"?"})):l1(u.search||{}),m=Ov(c.searchParams,d,{...l,encoding:fn.None}),p=Vv(m,l);return{...c,searchParams:m,search:p,paths:D0(c),fullPath:ou(c),host:Pi(c),origin:E0(c),href:b0({...c,search:p})}}const Wv=ct({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:Lv,hash:"",fullPath:"/",href:"/"},!0);({...Wv.defaultValue});const jv=0;function A0(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==jv)}const Ii="locationchange",Lt=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Rc=Lt?.pushState;function Lc(...e){if(!Rc)return;const t=Rc.apply(Lt,e);return globalThis.dispatchEvent(new Event(Ii)),t}const Oc=Lt?.replaceState;function _c(...e){if(!Oc)return;const t=Oc.apply(Lt,e);return globalThis.dispatchEvent(new Event(Ii)),t}function qv(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Lt)){{if(Lt.pushState===Lc)throw new Ic("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Lt.replaceState===_c)throw new Ic("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Lt.pushState=Lc,Lt.replaceState=_c,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Ii))})}}function Rs(e,t){const r=Xr(e),n=Yr({value:Yr({value:r.pathname,prefix:tt({value:t||"",prefix:"/"})}),prefix:"/"}),s=n?n.split("/"):[],i=Object.keys(r.searchParams).length?r.searchParams:void 0,o=r.hash?Yr({value:r.hash,prefix:"#"}):void 0;return{paths:s,search:i,hash:o}}class au{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){Qh(t,Iv),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new t0({defaultValue:r,equalityCheck:()=>!1}),qv(),this.removeGlobalListener=Qf(globalThis,Ii,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new Pv("Looping route sanitization detected; aborting window URL change listener.");const n=Rs(globalThis.location.href,this.params.basePath),s=t.sanitizeRoute(n);E.jsonEquals(n,s)?(this.sanitizationDepth=0,this.innerObservable.setValue(s)):(this.sanitizationDepth++,this.setRoute(s,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:s}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:iu(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Rs(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...Rs(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),i=this.routeIncludesBasePath(Rs(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return Uv(globalThis.location.href,{paths:i.paths,search:i.search,hash:i.hash?tt({value:i.hash,prefix:"#"}):""},{searchParamStrategy:hn.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:s}=Xr(n);return this.params.isPaused||!r.force&&E.jsonEquals(Xr(globalThis.location.href).fullPath,s)?!1:r.replace?(globalThis.history.replaceState(void 0,"",s),!0):(globalThis.history.pushState(void 0,"",s),!0)}setRouteOnDirectNavigation(t,r){return A0(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new su(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function zv(e){return new au({basePath:e,sanitizeRoute(t){return{paths:Kv(t.paths),hash:void 0,search:void 0}}})}function Kv(e){const t=e[0];if(E.isEnumValue(t,yt)){if(t===yt.Book)return[yt.Book,...e.slice(1)];if(t===yt.Search)return e[1]?[t,e[1]]:[yt.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return on.paths}const ui=tu()("element-book-change-route"),Vc="vira-",st=f0({assertInputs:e=>{if(!e.tagName.startsWith(Vc))throw new Error(`Tag name should start with '${Vc}' but got '${e.tagName}'`)}});function Gv(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given: ${O1(r)}`)}function Zv(e,t=[],r=!1){return r?t.includes(e.id)?t.filter(n=>n!==e.id):[...t,e.id]:[e.id]}function Uc({open:e,callback:t,popUpManager:r,host:n}){if(e){const s=r.showPopUp(n);t?.(s)}else r.removePopUp(),t?.(void 0)}const C=yr({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"}),Yv=ee;function Jv(e){try{if(!e)throw new Error("invalid empty color");return new Yv(e)}catch{throw new Error(`Invalid color: ${h(e)}`)}}function se({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function Wc(e,t){const r=X(t).map(n=>{const s=t[n],i=Jv(s);return`${C[n].name}: ${i.toString()};`}).join(" ");return se({name:e.name,svgTemplate:y`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const C0=se({name:"Check24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),jt=yr({"vira-form-input-radius":"8px"}),Ri=k`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,qt=yr({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),mn=yr({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":k`calc(${jt["vira-form-input-radius"].value} + 4px)`});function uu({selector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=2}){const s=me(qf(n+r+t));return k`
        ${me(e)}::after {
            content: '';
            top: calc(${s} * -1);
            left: calc(${s} * -1);
            position: absolute;
            width: calc(100% + calc(${s} * 2));
            height: calc(100% + calc(${s} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${mn["vira-focus-outline-color"].value};
            border-radius: ${mn["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const $t=yr({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black","vira-form-selection-active-background-color":"#d2eaff","vira-form-selection-active-foreground-color":"black"}),Hv=k`
    padding: 0;
    margin: 0;
`,Ot=k`
    ${Hv};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,jc=k`#e2e2e2`,qc={menuShadow:k`
        filter: drop-shadow(0px 5px 5px ${jc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:k`
        filter: drop-shadow(0px -5px 5px ${jc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},pn=k`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,P=st()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>k`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),_t=st()({tagName:"vira-menu-item",hostClasses:{"vira-menu-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>k`
        :host {
            display: flex;
            ${pn};
        }

        .item {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${e["vira-menu-item-selected"].selector} ${P} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${P} {
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .include-left-spacing {
            padding-left: 12px;
        }
    `,render({inputs:e}){return y`
            <div class="item ${Zt({"include-left-spacing":!!e.hideCheckIcon})}">
                ${Be(!e.hideCheckIcon,y`
                        <${P.assign({icon:C0})}></${P}>
                    `)}
                <slot>${e.label}</slot>
            </div>
        `}});function Qv(e,t){return e>t}function Xv(e,t){return e<t}function rs(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var kt;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(kt||(kt={}));var H;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(H||(H={}));function Li(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const s=n[t.x];if(s)if(s.navEntry.navParams.group){const i=Li(s.children);i&&(r=i.node)}else s.navEntry.navParams.disabled||(r=s)}}if(r)return{node:r,coords:t}}function zc(e,t,r,n){if(!t){const u=Li(e.children);return u?(rs(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:H.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:H.Navigate}}const{nextNode:s,requiresWrapping:i,coords:o}=$0(t.position,r),a=n?!0:!i;return s&&a?(rs(s.element),{success:!0,defaulted:!1,newElement:s.element,wrapped:i,direction:r,navAction:H.Navigate,coords:o}):s?a?{success:!1,reason:"no conditions matched",direction:r,navAction:H.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:H.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:H.Navigate}}function $0(e,t){let r=!1,n,s=1;const i=Date.now();for(;!r||!n;)if(n=eb(e,t,s),r=!n.nextNode?.navEntry.navParams.disabled,s++,Date.now()-i>1e3)return C1.warning("Failed to find next non-disabled node."),n;return n}function eb(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;pr.isDefined(n,"missing parent");const s=nn.isDefined(n.children[e.nodeCoords.y]),i=n.children.length>1&&(t===kt.Down||t===kt.Up),o=t===kt.Down||t===kt.Right?r:-1*r,a=o<0?Qv:Xv,u=i?ml(e.nodeCoords.y+o,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=nn.isDefined(n.children[u]),c=i?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:ml(e.nodeCoords.x+o,{min:0,max:s.length-1,takeOverflow:!0}),d=n.children[u]?.[c],m=i?a(u,e.nodeCoords.y):a(c,e.nodeCoords.x);return{nextNode:d,requiresWrapping:m,coords:{x:c,y:u}}}function tb(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:H.Pibling};const{nextNode:s,requiresWrapping:i,coords:o}=$0(n,t),a=s?.navEntry.navParams.group?Li(s.children):{node:s,coords:o},u=r?!0:!i;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:H.Pibling}:u?(rs(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:i,coords:a.coords,direction:t,navAction:H.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:H.Pibling}}var Fe;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Fe||(Fe={}));const vt={name:"data-nav",js(e){return e?`[${vt.name}*="${e}"]`:`[${vt.name}]`},css({baseSelector:e="",navValue:t}={}){return k`
            ${me(e)}${me(vt.js(t))}
        `}},lu="navEntry";function k0(e){return lu in e}function S0(e){if(k0(e)){const t=e[lu];return nn.instanceOf(t,x0,"Invalid nav entry")}else return}function rb(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Fe.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class x0{element;navParams;navTreeNode;navValue;eventListener=rb(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return pr.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(vt.name,""),Co(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,s=t===(n===Fe.Focused);if(!(this.navParams.group||this.navController.locked||s||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Fe.Focused),Co(this.element)||this.element.focus()):(this.removeNavValue(Fe.Focused),Co(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,H.Focus)}activate(t){const r=this.navValue,n=t===(r===Fe.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(Fe.Active):this.setNavValue(Fe.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,H.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(vt.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(vt.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function nb(e,t){Object.entries(t).forEach(([r,n])=>{E.isBoolean(n)&&n?e.setAttribute(r,""):E.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const sb=Yt(class extends Jt{element;lastKey;constructor(e){super(e),this.element=ys(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),rt}});function ib(e){return"group"in e?Fe.Group:e.disabled?Fe.Disabled:""}function Kc(e,t={}){return sb(h(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;pr.instanceOf(r,HTMLElement);const s={[vt.name]:ib(t),tabindex:n?0:-1};nb(r,s);const i=S0(r)||new x0(r,e,t);k0(r)?(i.navParams=t,i.navController=e):r[lu]=i,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}function ob(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:H.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:H.Enter};const r=t.position.node.children[0]?.[0];return r?(rs(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:H.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:H.Enter}}function ab(e,t){return F0([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function F0(e,t,r){for(let n=0;n<t.length;n++){const s=t[n];for(let i=0;i<s.length;i++){const o=s[i],a={ancestorChain:e,nodeCoords:{x:i,y:n},node:o};if(r(a))return a;const u=F0(e.concat(a),o.children,r);if(u)return u}}}function T0(e,t){const r=ab(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function ub(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:H.Exit};const r=t.position.ancestorChain.toReversed().find(s=>!s.node.root&&!s.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:H.Exit};const{nodeCoords:n}=T0(e,r.navEntry);return rs(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:H.Exit,coords:n}}class lb extends gr()("nav-exit"){}class N0 extends gr()("nav-activate"){}class cb extends gr()("nav-focus"){}class db extends gr()("nav-enter"){}class fb extends gr()("nav-navigate"){}class hb extends gr()("nav-navigate-pibling"){}function mb(e){return{root:!0,children:M0(e)?.children||[]}}function M0(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=S0(t),n=pb(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function pb(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(u=>r(u)));return}const s=n.navEntry.navParams.x,i=n.navEntry.navParams.y||0,o=cs(t,i,()=>({noX:[],withX:[],y:i}));s==null?o.noX.push(n):o.withX.push({x:s,node:n})}return e.children.forEach(n=>{const s=M0(n);s&&r(s)}),t.sort((n,s)=>n.y-s.y).map(n=>(n.withX.sort((s,i)=>s.x-i.x),n.withX.forEach(({x:s,node:i})=>{n.noX.splice(s,0,i)}),n.noX)).filter(E.isTruthy)}class B0 extends Ta{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Li(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const s=T0(this.getNavTree(),t);r?(this.navEntries.forEach(o=>{o!==t&&o.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:s}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const i={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:s.nodeCoords};return r&&(n===H.Activate?this.dispatch(new N0({detail:i})):n===H.Focus&&this.dispatch(new cb({detail:i}))),i}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:H.Navigate,reason:"NavController is locked."};const n=zc(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new fb({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:H.Enter,reason:"NavController is locked."};const r=ob(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new db({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:H.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:H.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return pr.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:H.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===H.Activate&&this.currentNavEntry.entry.focus(!0);const t=ub(this.getNavTree(),this.currentNavEntry);return this.dispatch(new lb({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:H.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),i={...this.currentNavEntry?tb(this.currentNavEntry,r,t):zc(n,void 0,r,t),navAction:H.Pibling};return this.dispatch(new hb({detail:i})),i}buildNavTree(){const t=Cv(this.rootElement),r=mb(t);return this.cachedNavTree=r,r}}const Kr=st()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>k`
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
    `,render({inputs:e}){function t(r){if(!e.route)return;const n=e.route.router.setRouteOnDirectNavigation(e.route.route,r);e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:n?"instant":"smooth"})}if(e.link?.newTab)return y`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    ${e.attributePassthrough?.a?la(e.attributePassthrough.a):K}
                    style=${At(e.stylePassthrough?.a)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return y`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    ${e.attributePassthrough?.a?la(e.attributePassthrough.a):K}
                    style=${At(e.stylePassthrough?.a)}
                    ${G("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),Gc={item:"menu-item"},Wn=st()({tagName:"vira-menu",state({inputs:e,host:t}){return{internalNavController:e.navController||new B0(t)}},hostClasses:{"vira-menu-multiselect":({inputs:e})=>!!e.isMultiSelect},styles:({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-direction: column;

            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 100;
            box-sizing: border-box;
            background-color: ${$t["vira-form-background-color"].value};
            color: ${$t["vira-form-foreground-color"].value};
        }

        .menu-item {
            ${Ot};
            will-change: background-color;
            background-color: inherit;
            outline: none;
            cursor: pointer;
        }

        ${vt.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Fe.Focused})}, ${vt.css({baseSelector:".menu-item:not(.disabled):not(.selected)",navValue:Fe.Active})}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${$t["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${e["vira-menu-multiselect"].selector} {
            &
                ${vt.css({baseSelector:".menu-item:not(.disabled)",navValue:Fe.Focused})},
                ${vt.css({baseSelector:".menu-item:not(.disabled)",navValue:Fe.Active})},
                .menu-item:not(.disabled):hover {
                background-color: ${$t["vira-form-selection-hover-background-color"].value};
                outline: none;
            }
        }

        ${_t} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${Ri};
            pointer-events: auto;
        }
    `,cleanup({inputs:e,state:t}){e.navController||t.internalNavController.destroy()},render({inputs:e,state:t}){Gv(e.items);const r=e.items.map(n=>{const s=!!e.selected?.includes(n.id),i=E.isString(n.label)?y`
                      <${_t.assign({label:n.label,selected:s,hideCheckIcon:e.hideCheckIcons})}></${_t}>
                  `:n.label,o=n.disabled||!e.isMultiSelect&&s;return n.route?y`
                    <${Kr.assign({route:n.route})}
                        class="menu-item ${Zt({disabled:!!n.disabled,selected:s})}"
                        ${Hr(Gc.item)}
                        title=${At(n.titleText||void 0)}
                        role="option"
                        ${Kc(t.internalNavController,{disabled:o})}
                    >
                        ${i}
                    </${Kr}>
                `:y`
                    <button
                        class="menu-item ${Zt({disabled:!!n.disabled,selected:s})}"
                        ${Hr(Gc.item)}
                        title=${At(n.titleText||void 0)}
                        role="option"
                        ${Kc(t.internalNavController,{disabled:o})}
                    >
                        ${i}
                    </button>
                `});return y`
            ${r}
        `}});var cu=(e=>(e.Directional="directional",e.AllRounded="all-rounded",e.AllSquare="all-square",e))(cu||{}),li=(e=>(e.Downwards="downwards",e.Upwards="upwards",e))(li||{});const jn=st()({tagName:"vira-pop-up-menu",hostClasses:{"vira-pop-up-menu-open-upwards":({inputs:e})=>e.direction==="upwards","vira-pop-up-menu-rounded":({inputs:e})=>e.cornerStyle==="all-rounded","vira-pop-up-menu-square":({inputs:e})=>e.cornerStyle==="all-square"},styles:({hostClasses:e})=>k`
        :host {
            display: flex;

            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${jt["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${$t["vira-form-background-color"].value};
            border: 1px solid ${$t["vira-form-border-color"].value};
            color: ${$t["vira-form-foreground-color"].value};
            ${qc.menuShadow}
        }

        ${e["vira-pop-up-menu-open-upwards"].selector} {
            ${qc.menuShadowReversed}
            border-radius: ${jt["vira-form-input-radius"].value};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        ${e["vira-pop-up-menu-square"].selector} {
            border-radius: 0;
        }

        ${e["vira-pop-up-menu-rounded"].selector} {
            border-radius: ${jt["vira-form-input-radius"].value};
        }
    `,render(){return y`
            <slot></slot>
        `}});class gb extends t0{constructor(){super({defaultValue:document.hidden,equalityCheck:E.strictEquals}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const t=r=>this.updateVisibility(r);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const r=wb.includes(t.type),n=yb.includes(t.type),s=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(s)}}const yb=["blur","focusout","pagehide"],wb=["focus","focusin","pageshow"],vb=new gb;function bb(e,t){return vb.listen(e,t)}const Zc={top:0,left:0,right:0,bottom:0};class P0 extends Hf("hide-pop-up"){}class I0 extends gr()("nav-select"){}class Db{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new Ta;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[bb(!1,t=>{t||this.removePopUp()}),this.navController.listen(N0,t=>{t.detail.success&&(this.listenTarget.dispatch(new I0({detail:t.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),t.stopImmediatePropagation(),t.preventDefault())}),gl("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),gl("keydown",t=>{const r=t.code;r==="Escape"?this.removePopUp():this.options.supportNavigation&&(r==="ArrowDown"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:kt.Down,allowWrapping:!1})):r==="ArrowUp"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:kt.Up,allowWrapping:!1})):r==="ArrowLeft"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:kt.Left,allowWrapping:!1})):r==="ArrowRight"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:kt.Right,allowWrapping:!1})):(r==="Enter"||r==="Return"||r==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(t.stopImmediatePropagation(),t.preventDefault()))})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new P0)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},s=xv(t);pr.instanceOf(s,HTMLElement);const i=t.getBoundingClientRect(),o=s.getBoundingClientRect(),a=s.offsetWidth-s.clientWidth,u=s.offsetHeight-s.clientHeight,l=s===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-u},c=Re(Zc,p=>i[p]),d=Re(Zc,p=>{const v=l[p],w=c[p],A=p==="bottom"?-51:0;return Math.abs(v-w+A)}),m=d.top>d.bottom+n.verticalDiffThreshold&&d.bottom<n.minDownSpace;return this.attachGlobalListeners(),{popDown:!m,positions:{container:l,root:c,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}const qe=st()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new Db(new B0(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>k`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Ot};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            outline: none;
            flex-grow: 1;
            box-sizing: border-box;
        }

        ${uu({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .dropdown-trigger {
            box-sizing: border-box;
            ${pn};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${Ri}
            pointer-events: auto;
        }

        ${e["vira-pop-up-trigger-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            left: 0;
            right: 0;

            & > * {
                pointer-events: auto;
            }
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
        }
    `,events:{navSelect:Pe(),openChange:Pe(),init:Pe()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:s,events:i}){e.popUpManager.listen(P0,()=>{if(t({showPopUpResult:void 0}),s(new i.openChange(void 0)),!n.isDisabled){const o=r.shadowRoot.querySelector(".dropdown-wrapper");pr.instanceOf(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),e.popUpManager.listen(I0,o=>{n.keepOpenAfterInteraction||Uc({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),s(new i.navSelect(o.detail))}),s(new i.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:s,host:i,slotNames:o}){function a({emitEvent:c,open:d},m){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&m){const p=i.shadowRoot.querySelector(".dropdown-trigger");if(p&&!m.composedPath().includes(p))return}Uc({open:d,callback(p){s({showPopUpResult:p}),c&&e(new t.openChange(p))},host:i,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=r.showPopUpResult?r.showPopUpResult.popDown?k`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                      top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                      left: ${n.popUpOffset?.left||0}px;
                      right: ${n.popUpOffset?.right||0}px;
                  `:k`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                      bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                      left: ${n.popUpOffset?.left||0}px;
                      right: ${n.popUpOffset?.right||0}px;
                  `:void 0;function l(c){a({emitEvent:!0,open:!r.showPopUpResult},c)}return y`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${Zt({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${G("keydown",c=>{!r.showPopUpResult&&c.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},c)})}
                ${G("click",c=>{c.detail===0&&l(c)})}
                ${G("mousedown",c=>{c.button===0&&l(c)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${o.trigger}></slot>
                </div>
                <div class="pop-up-positioner" style=${u}>
                    ${Be(!!r.showPopUpResult,y`
                            <slot name=${o.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),Eb={menu:"menu-trigger-menu"},or=st()({tagName:"vira-menu-trigger",styles:k`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${qe} {
            width: 100%;
        }
    `,events:{itemActivate:Pe(),openChange:Pe()},state(){return{navController:void 0,popUpManager:void 0,showPopUpResult:void 0}},render({inputs:e,state:t,updateState:r,dispatch:n,events:s}){return y`
            <${qe.assign({isDisabled:e.isDisabled,keepOpenAfterInteraction:!0,z_debug_forceOpenState:e.z_debug_forceOpenState,popUpOffset:e.popUpOffset})}
                class=${Zt({open:!!t.showPopUpResult})}
                ${G(qe.events.init,i=>{r({navController:i.detail.navController,popUpManager:i.detail.popUpManager})})}
                ${G(qe.events.openChange,i=>{!!t.showPopUpResult!=!!i.detail&&n(new s.openChange(i.detail)),r({showPopUpResult:i.detail})})}
                ${G(qe.events.navSelect,i=>{const o=i.detail.x,a=e.items[o];if(!a)throw new Error(`Found no dropdown option at index '${o}'`);n(new s.itemActivate(Zv(a,e.selected,e.isMultiSelect))),e.isMultiSelect||globalThis.setTimeout(()=>t.popUpManager?.removePopUp())})}
            >
                <slot slot=${qe.slotNames.trigger}></slot>
                ${t.navController&&t.showPopUpResult?y`
                          <${jn.assign({direction:t.showPopUpResult.popDown?li.Downwards:li.Upwards,cornerStyle:e.menuCornerStyle})}
                              slot=${qe.slotNames.popUp}
                          >
                              <${Wn.assign({items:e.items,selected:e.selected,navController:t.navController,isMultiSelect:!!e.isMultiSelect,hideCheckIcons:e.hideCheckIcons})}
                                  ${Hr(Eb.menu)}
                              ></${Wn}>
                          </${jn}>
                      `:K}
            </${qe}>
        `}}),le=st()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>k`
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
    `,render({inputs:e}){return y`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}});var R0=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(R0||{});const we=st()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>k`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${pn};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${mn["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Ri};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Ot};
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
            border-radius: ${jt["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${qt["vira-interaction-animation-duration"].value},
                background-color
                    ${qt["vira-interaction-animation-duration"].value},
                border-color ${qt["vira-interaction-animation-duration"].value};
        }

        .empty-text {
            width: 0;
        }

        ${uu({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${P} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${e["vira-button-expand-to-fit-icon"].name})) {
            & ${P} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }
    `,render:({inputs:e})=>{const t=e.icon?y`
                  <${P.assign({icon:e.icon})}></${P}>
              `:K,r=e.text?y`
                  <span class="text-template">${e.text}</span>
              `:y`
                  <span class="empty-text">&nbsp;</span>
              `;return y`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}}),Mt=st()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Ot};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${qt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Pe()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:s,inputs:i}){const o=i.expanded?k`
                  height: ${e.contentHeight}px;
              `:k`
                  height: 0;
              `;return y`
            <button
                class="header-wrapper"
                ${G("click",()=>{n(new s.expandChange(!i.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${d0(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Ab=se({name:"Chat24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),L0=se({name:"ChevronUp24Icon",svgTemplate:y`
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
    `}),O0=se({name:"CloseX24Icon",svgTemplate:y`
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
    `}),Cb=se({name:"Commit24Icon",svgTemplate:y`
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
    `}),$b=se({name:"Document24Icon",svgTemplate:y`
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
    `}),_0=se({name:"Element16Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ut=se({name:"Element24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),V0=se({name:"EyeClosed24Icon",svgTemplate:y`
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
    `}),U0=se({name:"EyeOpen24Icon",svgTemplate:y`
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
    `}),W0=se({name:"Loader24Icon",svgTemplate:y`
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
    `}),kb=k`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${qt["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,ns=se({name:"LoaderAnimated24Icon",svgTemplate:y`
        <style>
            ${kb}
        </style>
        ${W0.svgTemplate}
    `}),qn=se({name:"Options24Icon",svgTemplate:y`
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
    `}),Sb=se({name:"Pencil24Icon",svgTemplate:y`
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
    `}),xb=se({name:"Shield24Icon",svgTemplate:y`
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
    `}),Fb=se({name:"SpeakerLoud24Icon",svgTemplate:y`
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
    `}),Tb=se({name:"SpeakerMedium24Icon",svgTemplate:y`
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
    `}),Nb=se({name:"SpeakerMuted24Icon",svgTemplate:y`
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
    `}),Mb=se({name:"SpeakerQuiet24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Bb=se({name:"Star24Icon",svgTemplate:y`
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
    `}),ci=se({name:"StatusFailure24Icon",svgTemplate:y`
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
    `}),Pb=se({name:"StatusInProgress24Icon",svgTemplate:y`
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
    `}),Ib=se({name:"StatusSuccess24Icon",svgTemplate:y`
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
    `}),Rb=se({name:"StatusWarning24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" style="fill:none;stroke:#000;stroke-width:1px" />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                style="stroke:#000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
            <circle cx="12" cy="16" r="1" />
        </svg>
    `}),ha={Chat24Icon:Ab,Check24Icon:C0,ChevronUp24Icon:L0,CloseX24Icon:O0,Commit24Icon:Cb,Document24Icon:$b,Element16Icon:_0,Element24Icon:Ut,EyeClosed24Icon:V0,EyeOpen24Icon:U0,Loader24Icon:W0,LoaderAnimated24Icon:ns,Options24Icon:qn,Pencil24Icon:Sb,Shield24Icon:xb,SpeakerLoud24Icon:Fb,SpeakerMedium24Icon:Tb,SpeakerMuted24Icon:Nb,SpeakerQuiet24Icon:Mb,Star24Icon:Bb,StatusFailure24Icon:ci,StatusInProgress24Icon:Pb,StatusSuccess24Icon:Ib,StatusWarning24Icon:Rb},ko={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix"},Rn=st()({tagName:"vira-dropdown",styles:k`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            position: relative;
            max-width: 100%;
        }

        ${or} {
            width: 100%;
        }

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            align-self: flex-start;
            will-change: transform;
            transform: rotate(180deg);
            transition: transform
                ${qt["vira-interaction-animation-duration"].value} linear;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .open {
            & .trigger-icon {
                transform: rotate(0);
            }

            &:not(.open-upwards).dropdown-trigger {
                border-bottom-left-radius: 0;
            }

            &.open-upwards.dropdown-trigger {
                border-top-left-radius: 0;
            }
        }

        .dropdown-trigger {
            ${pn};
            border: 1px solid ${$t["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${jt["vira-form-input-radius"].value};
            background-color: ${$t["vira-form-background-color"].value};
            color: ${$t["vira-form-foreground-color"].value};
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,events:{selectedChange:Pe(),openChange:Pe()},state(){return{showPopUpResult:void 0}},render({state:e,inputs:t,dispatch:r,events:n,updateState:s}){const i=ds(t.selected,c=>t.options.find(d=>d.id===c),E.isTruthy),o=t.icon?y`
                  <${P.assign({icon:t.icon})}
                      ${Hr(ko.icon)}
                  ></${P}>
              `:K,a=!i.length,u=t.selectionPrefix&&!a?y`
                      <span class="selected-label-prefix" ${Hr(ko.prefix)}>
                          ${t.selectionPrefix}
                      </span>
                  `:K,l=a?t.placeholder||"":t.isMultiSelect&&i.length>1?`${i.length} Selected`:i[0]?.label||"";return y`
            <${or.assign({items:t.options,selected:t.selected,isDisabled:t.isDisabled,isMultiSelect:t.isMultiSelect,z_debug_forceOpenState:t.z_debug_forceOpenState,popUpOffset:{vertical:-1,right:24}})}
                ${G(or.events.openChange,c=>{s({showPopUpResult:c.detail}),r(new n.openChange(c.detail))})}
                ${G(or.events.itemActivate,c=>{r(new n.selectedChange(c.detail))})}
            >
                <div
                    class="dropdown-trigger ${Zt({open:!!e.showPopUpResult,"open-upwards":!e.showPopUpResult?.popDown})}"
                    ${Hr(ko.trigger)}
                >
                    ${o}
                    <span
                        class="selection-display ${Zt({"using-placeholder":a})}"
                        title=${At(a?void 0:l)}
                    >
                        ${u} ${l}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${P.assign({icon:L0})}
                            class="trigger-icon"
                        ></${P}>
                    </span>
                </div>
            </${or}>
        `}}),Xt=st()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:Pe(),imageError:Pe()},styles:({hostClasses:e})=>k`
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
    `,render({inputs:e,state:t,updateState:r,dispatch:n,events:s,slotNames:i}){const o=e.imageUrl,a=t.erroredUrls[o]?y`
                  <slot class="status-wrapper" name=${i.error}>
                      <${P.assign({icon:ci})} class="error"></${P}>
                  </slot>
              `:t.loadedUrls[o]?void 0:y`
                    <slot class="status-wrapper" name=${i.loading}>
                        <${P.assign({icon:ns})}></${P}>
                    </slot>
                `;return y`
            ${Be(!!a,a)}
            <img
                class=${Zt({hidden:!!a})}
                ${G("load",async()=>{e._debugLoadDelay&&await Gn(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[o]:!0}}),n(new s.imageLoad)})}
                ${G("error",async u=>{e._debugLoadDelay&&await Gn(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[o]:!0}}),n(new s.imageError(u.error))})}
                src=${o}
            />
        `}});function ma({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>ma({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Lb({value:e,allowed:t,blocked:r}){const n=t?ma({input:e,matcher:t}):!0,s=r?ma({input:e,matcher:r}):!1;return n&&!s}function pa(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,s)=>(Lb({...e,value:s})?n.filtered.push(s):n.blocked.push(s),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Ob({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:s}){const i=In(r,HTMLInputElement),o=E.hasKey(r,"data")&&r1.isString(r.data)||"";if(o){const{blocked:u}=pa({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=pa({value:i.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;i.value!==a&&(i.value=a),t!==a&&s(a)}var ga=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(ga||{});const fe=st()({tagName:"vira-input",cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>k`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ri};
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
                ${Ot};
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
                ${pn};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${Ot};
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
                border-radius: ${jt["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${qt["vira-interaction-animation-duration"].value};
            }

            .input-wrapper {
                ${Ot};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${jt["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${uu({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Ot};
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
                ${pn};
            }

            button {
                ${Ot};
                cursor: pointer;
                display: flex;
                transition: color
                    ${qt["vira-interaction-animation-duration"].value};
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
        `,events:{valueChange:Pe(),inputBlocked:Pe()},state(){return{forcedInputWidth:0,showPassword:!1}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},render:({inputs:e,dispatch:t,state:r,updateState:n,events:s,host:i})=>{const{filtered:o}=pa({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?y`
                  <${P.assign({icon:e.icon})} class="left-side-icon"></${P}>
              `:K,u=e.fitText?k`
                  width: ${r.forcedInputWidth}px;
              `:K,l=e.disableBrowserHelps||e.type==="password";return y`
            <span
                class="input-wrapper"
                ${G("mouseup",()=>{nn.instanceOf(i.shadowRoot.querySelector("input"),HTMLInputElement).focus()})}
            >
                ${a}
                ${Be(!!e.fitText,y`
                        <span
                            class="size-span"
                            ${d0(({contentRect:c})=>{n({forcedInputWidth:c.width})})}
                        >
                            <pre>${o||e.placeholder||K}</pre>
                        </span>
                    `)}
                <input
                    type=${_b(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${At(l?"off":void 0)}
                    autocorrect=${At(l?"off":void 0)}
                    autocapitalize=${At(l?"off":void 0)}
                    spellcheck=${At(l?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${o}
                    ${G("input",c=>{Ob({inputs:e,previousValue:o,event:c,inputBlockedCallback(d){t(new s.inputBlocked(d))},newValueCallback(d){t(new s.valueChange(d))}})})}
                    placeholder=${At(e.placeholder||void 0)}
                    ${e.attributePassthrough?la(e.attributePassthrough):K}
                />
                ${Be(!!(e.showClearButton&&e.value),y`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${G("click",c=>{c.stopImmediatePropagation(),c.preventDefault(),t(new s.valueChange(""))})}
                        >
                            <${P.assign({icon:O0})}></${P}>
                        </button>
                    `)}
                ${Be(e.type==="password",y`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${G("click",c=>{c.stopImmediatePropagation(),c.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${P.assign({icon:r.showPassword?U0:V0})}></${P}>
                        </button>
                    `)}
                ${Be(!!e.suffix,y`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style wrapper-border"></div>
            </span>
        `}});function _b(e,t){return e==="password"&&t?"text":e||"text"}const dt=f0(),at=dt()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>k`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const r=e.router?.createRouteUrl({...e.route})??"#";return y`
            <a
                href=${r}
                ${G("click",n=>{(!e.router||A0(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new ui(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Vb(e,t){return e.entry.entryType===ke.Root?!1:e.entry.entryType===ke.Page||E.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:E.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const It=dt()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${J["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${J["element-book-nav-hover-background-color"].value};
            color: ${J["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${J["element-book-nav-active-background-color"].value};
            color: ${J["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${at.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${J["element-book-nav-selected-background-color"].value};
            color: ${J["element-book-nav-selected-foreground-color"].value};
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
            color: ${J["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Vb(r,e.selectedPath))return;const n=k`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return y`
                <li style=${n}>
                    <${at.assign({router:e.router,route:{paths:[yt.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Zt({"title-row":!0,selected:e.selectedPath?E.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Be(Jr(r,ke.ElementExample),y`
                                    <${P.assign({icon:_0})}></${P}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${at}>
                </li>
            `});return y`
            <${at.assign({route:on,router:e.router})}>
                <slot name=${Vt.NavHeader}>Book</slot>
            </${at}>
            <ul>
                ${t}
            </ul>
        `}});async function Ub(e){await fa(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await kv(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const mr=dt()({tagName:"book-error",styles:k`
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
    `,render({inputs:e}){return(E.isArray(e.message)?e.message:[e.message]).map(r=>y`
                <p>${r}</p>
            `)}}),ss=dt()({tagName:"book-page-controls",events:{controlValueChange:Pe()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${J["element-book-page-foreground-faint-level-1-color"].value};
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

        ${fe} {
            height: 24px;
            max-width: 128px;
        }

        ${P}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,s],i)=>{if(s.controlType===Z.Hidden)return"";const o=Wb(e.currentValues[n],s,a=>{const u=E.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[n]:a}}))});return y`
                    <div class="control-wrapper">
                        ${Be(i===0,y`
                                <${P.assign({icon:qn})}
                                    class="options-icon"
                                ></${P}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${o}
                        </label>
                    </div>
                `}):""}});function Wb(e,t,r){return Lr(t,Z.Hidden)?"":Lr(t,Z.Checkbox)?y`
            <input
                type="checkbox"
                ?checked=${e}
                ${G("input",n=>{const s=In(n,HTMLInputElement);r(s.checked)})}
            />
        `:Lr(t,Z.Color)?y`
            <input
                type="color"
                .value=${e}
                ${G("input",n=>{const s=In(n,HTMLInputElement);r(s.value)})}
            />
        `:Lr(t,Z.Text)?y`
            <${fe.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${G(fe.events.valueChange,n=>{r(n.detail)})}
            ></${fe}>
        `:Lr(t,Z.Number)?y`
            <input
                type="number"
                .value=${e}
                ${G("input",n=>{const s=In(n,HTMLInputElement);r(s.value)})}
            />
        `:Lr(t,Z.Dropdown)?y`
            <select
                .value=${e}
                ${G("input",n=>{const s=In(n,HTMLSelectElement);r(s.value)})}
            >
                ${t.options.map(n=>y`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:y`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Yc=dt()({tagName:"book-breadcrumbs",styles:k`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,s)=>{const i=n>=s.length-1,o=s.slice(0,n+1),a=i?"":y`
                      <span class="spacer">&gt;</span>
                  `;return y`
                <${at.assign({route:{hash:void 0,search:void 0,paths:[yt.Book,...o]},router:e.router})}>
                    ${r}
                </${at}>
                ${a}
            `}):y`
                &nbsp;
            `}}),So=dt()({tagName:"book-breadcrumbs-bar",styles:k`
        :host {
            border-bottom: 1px solid
                ${J["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${J["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return y`
            ${Be(!!e.currentSearch,y`
                    &nbsp;
                `,y`
                    <${Yc.assign({currentRoute:e.currentRoute,router:e.router})}></${Yc}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${G("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const s=n.value;await Gn({milliseconds:200}),n.value===s&&(n.value?t(new ui({paths:[yt.Search,encodeURIComponent(n.value)]})):t(new ui(on)))})}
            />
        `}}),Jc=dt()({tagName:"book-entry-description",styles:k`
        :host {
            color: ${J["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${J["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }

        code {
            font-size: 1.2em;
        }
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>y`
                <p>${t}</p>
            `)}}),Hc=dt()({tagName:"book-page-wrapper",styles:k`
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

        ${at} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?y`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:y`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[yt.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?Wf(e.pageNode.entry.errors):void 0;return n&&console.error(n),y`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${at.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${at}>
                    ${n?y`
                              <${mr.assign({message:n.message})}></${mr}>
                          `:y`
                              <${Jc.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${Jc}>
                              <${ss.assign({config:e.pageNode.entry.controls,currentValues:Ba(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${ss}>
                          `}
                </div>
            </div>
        `}}),Ls=dt()({tagName:"book-element-example-controls",styles:k`
        :host {
            display: flex;
            color: ${J["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[yt.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return y`
            <${at.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${at}>
        `}}),Qc=Symbol("unset-internal-state"),Xc=dt()({tagName:"book-element-example-viewer",state(){return{isUnset:Qc}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Wf(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===Qc&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return y`
                ${Be(!!t.elementExampleNode.entry.styles,y`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",Ie(n)),console.error(n),y`
                <${mr.assign({message:`${t.elementExampleNode.entry.title} failed: ${Ie(n)}`})}></${mr}>
            `}},options:{allowPolymorphicState:!0}}),ed=dt()({tagName:"book-element-example-wrapper",styles:k`
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

        ${Ls} {
            color: ${J["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ls} {
            color: ${J["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return y`
            <div class="individual-example-wrapper">
                <${Ls.assign(T1(e,["currentPageControls"]))}></${Ls}>
                <${Xc.assign(e)}></${Xc}>
            </div>
        `}});function j0(e,t,r,n){const s=Go(r,n),i=[];if(s){const o=j0(e,t,s,n);o&&i.push(o)}if(Jr(r,ke.Page)&&!e.includes(r)){const o=Ba(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:o,breadcrumbs:Re(o,()=>r.fullUrlBreadcrumbs)})}return i.reduce((o,a)=>({config:{...o.config,...a.config},current:{...o.current,...a.current},breadcrumbs:{...o.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function jb({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:s,originalTree:i}){if(!e.length&&n)return[y`
                No results
            `];const o=E.isLengthAtLeast(e,1)?j0(e,s,e[0],i):void 0,a=o&&Object.values(o.config).length&&E.isLengthAtLeast(e,1)?y`
                  <${ss.assign({config:o.config,currentValues:o.current,fullUrlBreadcrumbs:o.breadcrumbs})}></${ss}>
              `:K,u=ov(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(Jr(l,ke.Page))return y`
                    <${Hc.assign({isTopLevel:t,pageNode:l,controls:s,router:r})}
                        class="block-entry"
                    ></${Hc}>
                `;if(Jr(l,ke.ElementExample)){const c=Ba(s,l.fullUrlBreadcrumbs.slice(0,-1));return y`
                    <${ed.assign({elementExampleNode:l,currentPageControls:c,router:r})}
                        class="inline-entry"
                    ></${ed}>
                `}else return Jr(l,ke.Root)?K:y`
                    <${mr.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${mr}>
                `});return[a,u]}const Wr=dt()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:k`
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

        ${So} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${qt["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:Pe()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:s})=>{const i=Zo(e.currentRoute.paths),o=jb({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return y`
            <${So.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${So}>

            ${Be(e.showLoading,y`
                    <div
                        ${Bc(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${P.assign({icon:ns})}></${P}>
                    </div>
                    ${Be(!!n.lastElement,y`
                            ${n.lastElement}
                            <slot name=${Vt.Footer}></slot>
                        `)}
                `,y`
                    <div
                        ${Bc(a=>{s({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot name=${Vt.Footer}></slot>
                `)}
        `}});function qb(e,t,r){const n=td(e,t);return n.length?n:(r(on),td(e,on.paths))}function td(e,t){return e.filter(r=>V1({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const xo=ru()({tagName:"element-book-app",state(){return{currentRoute:on,router:void 0,loading:!0,colors:{config:void 0,theme:Pc(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:Pe()},styles:k`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${J["element-book-page-background-color"].value};
            color: ${J["element-book-page-foreground-color"].value};
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

        ${Wr} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${It} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await rd(e,Zo(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:s,events:i})=>{t._debug&&console.info("rendering element-book app");function o(c){return{...e.currentRoute,...c}}function a(c){const d=o(c);return!E.jsonEquals(e.currentRoute,d)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(E.isTruthy).join(" - "))}function l(c){if(!a(c))return;const d=o(c);e.router?e.router.setRoute(d):n({currentRoute:{...e.currentRoute,...d}}),t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&s(new i.pathUpdate(d.paths))}try{if(t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const D=zv(t.internalRouterConfig.basePath);n({router:D}),D.listen(!0,S=>{n({currentRoute:S})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!E.jsonEquals(c,e.colors.config)){const D=Pc(c);n({colors:{config:c,theme:D}}),vy(r,D)}const d=t._debug??!1,m=z1({entries:t.pages,debug:d});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:rh(m.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const p=Zo(e.currentRoute.paths),w=(p?Bv({flattenedNodes:m.flattenedNodes,searchQuery:p}):void 0)??qb(m.flattenedNodes,e.currentRoute.paths,l);u(w[0]?.entry.title);const A=e.treeBasedControls?.controls;return A?(t._debug&&console.info({currentControls:A}),y`
                <div
                    class="root"
                    ${G(ui,async D=>{const S=D.detail;if(!a(S))return;if(n({loading:!0}),l(S),!(r.shadowRoot.querySelector(It.tagName)instanceof It))throw new TypeError(`Failed to find child '${It.tagName}'`);await rd(r,p,e.currentRoute)})}
                    ${G(ss.events.controlValueChange,D=>{if(!e.treeBasedControls)return;const S=G1(A,D.detail.fullUrlBreadcrumbs,D.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:S}})})}
                >
                    <${It.assign({flattenedNodes:m.flattenedNodes,router:e.router,selectedPath:p?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Vt.NavHeader}
                            slot=${Vt.NavHeader}
                        ></slot>
                    </${It}>
                    <${Wr.assign({controls:A,currentNodes:w,currentRoute:e.currentRoute,debug:d,originalTree:m.tree,router:e.router,showLoading:e.loading})}
                        ${G(Wr.events.loadingRender,async D=>{await fa();const S=r.shadowRoot.querySelector(Wr.tagName);S?S.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Wr.tagName}' for scrolling.`),await fa(),n({loading:!D.detail})})}
                    >
                        <slot
                            name=${Vt.Footer}
                            slot=${Vt.Footer}
                        ></slot>
                    </${Wr}>
                </div>
            `):y`
                    <${mr.assign({message:"Failed to generate page controls."})}></${mr}>
                `}catch(c){return console.error(c),y`
                <p class="error">${Ie(c)}</p>
            `}}});async function rd(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(It.tagName);if(!(n instanceof It))throw new TypeError(`Failed to find child '${It.tagName}'`);await Ub(n)}const Ge=Le({title:"Elements",parent:void 0}),zb=Le({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:Z.Color,initValue:""},"Fill Color":{controlType:Z.Color,initValue:""},"Stroke Width":{controlType:Z.Number,initValue:1}},defineExamples({defineExample:e}){Object.values(ha).forEach(t=>{e({title:t.name,styles:k`
                    :host(:hover) ${P} {
                        background-color: #f2f2f2;
                    }

                    ${P} {
                        padding: 8px;
                        border-radius: ${jt["vira-form-input-radius"].value};
                    }
                `,render({controls:r}){const n=k`
                        ${C["vira-icon-fill-color"].name}: ${me(r["Fill Color"]||"inherit")};
                        ${C["vira-icon-stroke-color"].name}: ${me(r["Stroke Color"]||"inherit")};
                        ${C["vira-icon-stroke-width"].name}: ${me(r["Stroke Width"]?qf(r["Stroke Width"]):"inherit")};
                    `;return y`
                        <${P.assign({icon:t})} style=${n}></${P}>
                    `}})})}}),Kb=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:y`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:k`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:k`
            ${_t} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],Gb=Le({title:_t.tagName,parent:Ge,controls:{Selected:{controlType:Z.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:Z.Text,initValue:""}},defineExamples({defineExample:e}){Kb.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?y`
                            <${_t.assign(n)}>
                                ${t.customTemplate}
                            </${_t}>
                        `:y`
                            <${_t.assign(n)}></${_t}>
                        `}})})}}),Zb=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"},{id:4,label:"four"},{id:5,label:"five"},{id:6,label:"six"},{id:7,label:"link here",route:{route:{paths:["test"]},router:new au({sanitizeRoute(e){return e}})}}],Yb=[{title:"basic"},{title:"multi",inputs:{isMultiSelect:!0}},{title:"rounded",inputs:{menuCornerStyle:cu.AllRounded}},{title:"no checks",inputs:{hideCheckIcons:!0}},{title:"disabled",inputs:{isDisabled:!0}}],Jb=Le({parent:Ge,title:or.tagName,defineExamples({defineExample:e}){Yb.forEach(t=>{e({title:t.title,styles:k`
                    .trigger {
                        cursor: pointer;
                        border: 4px solid #ccc;
                        padding: 8px 16px;
                    }
                `,render(){return y`
                        <${or.assign({items:Zb,popUpOffset:{vertical:-1},...t.inputs})}>
                            <div class="trigger">Trigger Menu</div>
                        </${or}>
                    `}})})}}),q0=[{id:1,label:"one"},{id:2,label:"two"},{id:3,label:"three"}],Hb=[{title:"basic"},{title:"with selection",inputs:{selected:[2]}},{title:"with a link",inputs:{items:[...q0,{id:4,label:"link here",route:{route:{paths:["test"]},router:new au({sanitizeRoute(e){return e}})}}]}}],Qb=Le({parent:Ge,title:Wn.tagName,defineExamples({defineExample:e}){Hb.forEach(t=>{e({title:t.title,render(){return y`
                        <${Wn.assign({isMultiSelect:!1,navController:void 0,items:q0,selected:[],...t.inputs})}></${Wn}>
                    `}})})}}),z0=[];gt(li).forEach(e=>{gt(cu).forEach(t=>{z0.push({title:[e,t].join(" "),inputs:{cornerStyle:t,direction:e}})})});const Xb=Le({parent:Ge,title:jn.tagName,defineExamples({defineExample:e}){z0.forEach(t=>{e({title:t.title,styles:k`
                    .content {
                        padding: 8px 16px;
                    }
                `,render(){return y`
                        <${jn.assign(t.inputs)}>
                            <div class="content">Contents</div>
                        </${jn}>
                    `}})})}}),eD=Le({parent:Ge,title:qe.tagName,defineExamples({defineExample:e}){e({title:"basic",styles:k`
                ${qe} {
                    ${mn["vira-focus-outline-border-radius"].name}: 0;
                }

                .trigger {
                    cursor: pointer;
                    border: 4px solid #ccc;
                    padding: 8px 16px;
                }

                .menu {
                    border: 4px solid #eee;
                    border-top: none;
                    padding: 8px 16px;
                    background-color: #eef9ff;
                }
            `,render(){return y`
                    <${qe.assign({keepOpenAfterInteraction:!0})}>
                        <div class="trigger" slot=${qe.slotNames.trigger}>
                            Trigger Pop Up
                        </div>
                        <div class="menu" slot=${qe.slotNames.popUp}>Pop up!</div>
                    </${qe}>
                `}})}}),tD=Le({parent:Ge,title:le.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:Z.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return y`
                    <${le.assign({text:"Text here",bold:!1})}></${le}>
                `}}),e({title:"Bold",render(){return y`
                    <${le.assign({text:"Text here",bold:!0})}></${le}>
                `}}),e({title:"Dynamic",render({controls:t}){return y`
                    <${le.assign({text:"Text here",bold:t.bolded})}></${le}>
                `}}),e({title:"Resized",styles:k`
                ${le} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return y`
                    <${le.assign({text:"Not Bolded",bold:!1})}></${le}>
                    <${le.assign({text:"Bolded",bold:!0})}></${le}>
                `}}),e({title:"Alignment",styles:k`
                ${le} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return y`
                    <${le.assign({text:"Not Bolded",bold:!1})}></${le}>
                    <${le.assign({text:"Bolded",bold:!0})}></${le}>
                `}}),e({title:"Stylized",styles:k`
                ${le} {
                    text-decoration: underline;
                }
            `,render(){return y`
                    <${le.assign({text:"Not Bolded",bold:!1})}></${le}>
                    <${le.assign({text:"Bolded",bold:!0})}></${le}>
                `}})}}),rD=Le({parent:Ge,title:we.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:Z.Color,initValue:we.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:Z.Color,initValue:we.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:Z.Color,initValue:we.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:Z.Color,initValue:we.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:s}){const i=n??k``;e({title:r,styles:i,render({controls:o}){const a=k`
                        ${we.cssVars["vira-button-primary-color"].name}: ${me(o["Primary color"]||"inherit")};
                        ${we.cssVars["vira-button-secondary-color"].name}: ${me(o["Secondary color"]||"inherit")};
                        ${we.cssVars["vira-button-primary-hover-color"].name}: ${me(o["Hover color"]||"inherit")};
                        ${we.cssVars["vira-button-primary-active-color"].name}: ${me(o["Active color"]||"inherit")};
                    `;return y`
                        <${we.assign({text:"hello",...s})}
                            style=${a}
                        ></${we}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:qn}}),t({title:"with expanding icon",inputs:{icon:qn,expandToFitIcon:!0}}),t({title:"outline",inputs:{buttonStyle:R0.Outline}}),t({title:"only icon",inputs:{icon:qn,text:""}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:k`
                ${we} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:k`
                ${we} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:k`
                :host {
                    ${we.cssVars["vira-button-primary-color"].name}: pink;
                    ${we.cssVars["vira-button-secondary-color"].name}: purple;
                    ${we.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${we.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return y`
                    <${we.assign({text:"hello"})}></${we}>
                `}})}}),nD=Le({title:Mt.tagName,parent:Ge,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:k`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,s)=>y`
                        <${Mt.assign({expanded:!!r.expandedStates[s]})}
                            ${G(Mt.events.expandChange,i=>{const o=[...r.expandedStates];o[s]=i.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${Mt.slotNames.header}
                            >
                                Section ${s}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${G("click",()=>{const i=[...r.showMoreStates];i[s]=!i[s],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${Be(!!r.showMoreStates[s],y`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${Mt}>
                    `)}}),e({title:"wider examples",styles:k`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,s)=>y`
                        <${Mt.assign({expanded:!!r.expandedStates[s]})}
                            ${G(Mt.events.expandChange,i=>{const o=[...r.expandedStates];o[s]=i.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${Mt.slotNames.header}
                            >
                                Section ${s}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${G("click",()=>{const i=[...r.showMoreStates];i[s]=!i[s],t({showMoreStates:i})})}
                            >
                                show more
                            </button>
                            ${Be(!!r.showMoreStates[s],y`
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
                        </${Mt}>
                    `)}})}}),zn=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],sD=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...zn,{id:42,label:y`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...zn,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:k`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:k`
            ${Rn} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Ut}}],iD=Le({title:Rn.tagName,parent:Ge,controls:{Selected:{controlType:Z.Dropdown,initValue:"",options:["",...zn.map(e=>e.label)]},Prefix:{controlType:Z.Text,initValue:""},"Force State":{controlType:Z.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:Z.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:Z.Dropdown,initValue:"",options:["",...Object.keys(ha)]},Disabled:{controlType:Z.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:Z.Text,initValue:"Select something"}},defineExamples({defineExample:e}){sD.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:s}){const i={...t.inputs,placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:s.Placeholder,options:t.inputs?.options||zn,selected:s.Selected?[zn.find(o=>o.label===s.Selected)?.id].filter(E.isTruthy):r.selected,selectionPrefix:s.Prefix||t.inputs?.selectionPrefix,isDisabled:s.Disabled?s.Disabled==="all":t.inputs?.isDisabled,icon:s.Icon?ha[s.Icon]:t.inputs?.icon,isMultiSelect:s["Multi Select"]?s["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:s["Force State"]?s["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return y`
                        <${Rn.assign(i)}
                            ${G(Rn.events.selectedChange,o=>{n({selected:o.detail})})}
                        ></${Rn}>
                    `}})})}}),oD=Le({title:P.tagName,parent:Ge,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return y`
                    <${P.assign({icon:Ut})}></${P}>
                `}}),e({title:"using createColoredIcon",render(){return y`
                    <${P.assign({icon:Wc(Ut,{"vira-icon-stroke-color":"red"})})}></${P}>
                `}}),e({title:"fit container",styles:k`
                ${P} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return y`
                    <${P.assign({icon:Wc(Ut,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${P}>
                `}})}}),aD=Le({title:Xt.tagName,parent:Ge,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/element-vir/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:k`
                    border-radius: 32px;
                `,loadingSlot:y`
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
                        <${P.assign({icon:ns,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:k`
                    border-radius: 32px;
                `,errorSlot:y`
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
                        <${P.assign({icon:ci,fitContainer:!0})}
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
                `,allowReload:!0,loadingSlot:y`
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
                        <${P.assign({icon:ns,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `,errorSlot:y`
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
                        <${P.assign({icon:ci,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:k`
                    ${Xt} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||k``}
                    }

                    ${r.allowReload?k`
                              ${Xt} {
                                  cursor: pointer;
                              }

                              ${Xt}:hover {
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
                `,state(){return{imageUrl:r.inputs.imageUrl}},render({state:n,updateState:s}){return y`
                        <${Xt.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${G("click",()=>{r.allowReload&&s({imageUrl:`${r.inputs.imageUrl}?di=${Uf()}`})})}
                        >
                            ${r.loadingSlot?y`
                                      <div class="slot-wrapper" slot=${Xt.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:K}${r.errorSlot?y`
                                      <div class="slot-wrapper" slot=${Xt.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:K}
                        </${Xt}>
                    `}})})}}),uD=Le({title:fe.tagName,parent:Ge,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:Z.Color,initValue:fe.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:Z.Color,initValue:fe.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:Z.Color,initValue:fe.cssVars["vira-input-border-color"].default},"Focus color":{controlType:Z.Color,initValue:mn["vira-focus-outline-color"].default},"Selection color":{controlType:Z.Color,initValue:fe.cssVars["vira-input-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:s,inputs:i}){e({title:s,styles:k`
                    ${n||k``}
                `,state(){return{value:i.value}},render({state:o,updateState:a,controls:u}){const l={[String(fe.cssVars["vira-input-text-color"].name)]:u["Text color"],[String(fe.cssVars["vira-input-placeholder-color"].name)]:u["Placeholder color"],[String(fe.cssVars["vira-input-border-color"].name)]:u["Border color"],[String(mn["vira-focus-outline-color"].name)]:u["Focus color"],[String(fe.cssVars["vira-input-text-selection-color"].name)]:u["Selection color"]},c=Re(l,(m,p)=>p||"inherit"),d=Object.entries(c).map(([m,p])=>[m,p].join(": ")+";").join(`
`);return y`
                        <${fe.assign({...i,value:o.value})}
                            style=${d}
                            ${G(fe.events.valueChange,m=>{a({value:m.detail}),console.info("changed:",m.detail)})}
                        ></${fe}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Ut}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:k`
                    ${fe} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Ut}},{title:"taller height",styles:k`
                    ${fe} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Ut}},{title:"shorter height",styles:k`
                    ${fe} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Ut}},{title:"max width",styles:k`
                    ${fe} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:k`
                    ${fe} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:ga.Password,attributePassthrough:{autocomplete:"new-password"}}},{title:"attribute passthrough",inputs:{value:"",attributePassthrough:{type:"number"}}},{title:"email username",inputs:{value:"",type:ga.Email,attributePassthrough:{autocomplete:"username"}}}].forEach(t)}}),lD=Le({title:Kr.tagName,parent:Ge,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:Z.Color,initValue:""},"Hover color":{controlType:Z.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:s}){const i=k`
                        ${Kr.cssVars["vira-link-hover-color"].name}: ${me(s["Hover color"]||"inherit")};
                        color: ${me(s["CSS Color"]||"inherit")};
                    `;return y`
                        <${Kr.assign(n)} style=${i}>My Link</${Kr}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),cD=[Ge,zb],dD=[tD,rD,nD,iD,oD,aD,uD,lD,Gb,Qb,Jb,Xb,eD].sort((e,t)=>e.title.localeCompare(t.title)),fD=[...cD,...dD];ru()({tagName:"vira-book-app",styles:k`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${xo} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return y`
            <${xo.assign({internalRouterConfig:{basePath:iu("element-vir","vira"),useInternalRouter:!0},pages:fD,themeColor:"#33ccff"})}>
                <h1 slot=${Vt.NavHeader}>Vira</h1>
            </${xo}>
        `}});
